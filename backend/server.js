require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const prismaAuth = require('./middlewares/prisma_auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const port = process.env.PORT;

const app = express();
const memoryStore = new session.MemoryStore();

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
}));

app.use(express.json());
app.use(cors());

// Custom error handler
const errorHandler = (error, req, res, next) => {
    const status = error.status || 422;
    res.status(status).send(error.message);
}

// Middleware to authenticate and process request
app.use(async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            console.log('No header');
            return res.status(401).json({ error: 'No header' });
        }
        console.log('Token:', token);
        const userInfo = await prismaAuth.checkLogin(req);
        console.log('User Info:', userInfo);
        req.userInfo = userInfo;
        next();
    } catch (error) {
        console.log('Error:', error);
        res.status(401).json({ error: 'Unauthorized from server' });
    }
});

// New endpoint for token verification
app.get('/verify-token', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userInfo = await prismaAuth.loadUserInfo(`Bearer ${token}`);
        if (userInfo) {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        res.status(401).json({ error: 'verify token error' });
    }
});

// Dynamic route handling for Prisma operations
app.use('/api/:model', async (req, res) => {
    try {
        const model = req.params.model;
        if (!prisma[model]) {
            return res.status(400).json({ error: `Model '${model}' is not defined in Prisma schema` });
        }
        await prismaGet.process(req, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Routes
const testRoutes = require('./routes/test');
const usersRoutes = require('./routes/users');

// Register routes
app.use('/api/test', testRoutes);
app.use('/api/users', usersRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});
