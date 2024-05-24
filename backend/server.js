const express = require('express');
const app = express();
const port = 3002;

//keycloak
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const memoryStore = new session.MemoryStore();

app.get('/', (req, res) => {
    res.send('hello from node js')
});

// app.use(session({
//     secret: 'abcde',
//     resave: false,
//     saveUninitialized: false
// }));
// const keycloak = new Keycloak({ store: memoryStore, });
// app.use(keycloak.middleware());



app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
