const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const auth = require('./prisma_auth');

class PrismaBase {
  async process(req, res, next) {
    try {
      const userinfo = await auth.checkLogin(req);

      const model = req.params.model;
      const options = {}; // Load from your config
      const modelObj = prisma[model];

      return await this._process(req, res, modelObj, options, userinfo);
    } catch (e) {
      res.status(401).json(e);
    }
  }

  async _process(req, res, modelObj, options, userinfo) {
    throw new Error('Must be implemented by subclass');
  }
}

module.exports = PrismaBase;
