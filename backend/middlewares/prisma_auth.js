const axios = require('axios');
const https = require('https');

class PrismaAuth {
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

  async checkLogin(req) {
    const token = req.headers.authorization;

    if (token) {
      return await this.loadUserInfo(token);
    }

    throw { error: 'No header' };
  }

  async addOwnerCondition(options, modelConfig, userinfo) {
    const result = { ...options };

    if (!result.where) {
      result.where = { AND: [{}] };
    } else {
      const where = result.where;
      result.where = { AND: [where] };
    }

    const conditions = userinfo.membership.map(m => ({ [modelConfig.owner_column]: m }));
    result.where.AND.push({ OR: conditions });

    result.where[modelConfig.owner_column] = userinfo.membership[0];
    return result;
  }
}

module.exports = new PrismaAuth();
