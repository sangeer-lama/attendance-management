require('dotenv').config();
const cors = require('cors');
const express = require('express');
const keycloak = require('#middlewares/keycloak');

const port = process.env.PORT;

// Routes
const testRoutes = require('#routes/test');

const errorHandler = (error, req, res, next) => {
    const status = error.status || 422;
    res.status(status).send(error.message);
}

const app = express();
app.use(keycloak.middleware());
app.use(express.json());
app.use(cors());

// Register routes
app.use('/api', testRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});

// const express = require('express');
// const app = express();
// const port = 3002;

// //keycloak
// const session = require('express-session');
// const Keycloak = require('keycloak-connect');
// const memoryStore = new session.MemoryStore();

// app.get('/', (req, res) => {
//     res.send('hello from node js')
// });



// app.listen(port, () => {
//     console.log(`server running at http://localhost:${port}`);
// });



