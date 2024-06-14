const Keycloak = require("keycloak-connect");
const session = require('express-session');
require('dotenv').config();

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({store:memoryStore},{
  realm: process.env.KEYCLOAK_REALM,
  "auth-server-url": `${process.env.KEYCLOAK_URL}`,
  "ssl-required": "external",
  resource: process.env.KEYCLOAK_CLIENT,
  "bearer-only": true
});

module.exports = keycloak;