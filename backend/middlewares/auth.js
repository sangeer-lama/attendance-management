const axios = require('axios');
const https = require('https');

class Auth {
  constructor() {
    this.axiosInstance = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
  }

  async loadUserInfo(token) {
    const config = {
      keycloakUrl: process.env.KEYCLOAK_URL,
      keycloakRealm: process.env.KEYCLOAK_REALM
    };

    if (!token) {
      throw { error: 'Unauthorized' };
    }

    const url = `${config.keycloakUrl}/realms/${config.keycloakRealm}/protocol/openid-connect/userinfo`;
    
    try {
      const res = await this.axiosInstance.get(url, { headers: { Authorization: token } });
      return res.data;
    } catch (e) {
      throw { error: 'Unauthorized' };
    }
  }
}

module.exports = new Auth();
