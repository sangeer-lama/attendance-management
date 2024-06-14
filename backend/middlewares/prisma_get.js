const PrismaBase = require('./prisma_base');

class PrismaGet extends PrismaBase {
  async _process(req, res, modelObj, options, userinfo) {
    const id = req.query.id;
    let findManyOptions = options?.prisma?.options?.findMany;

    if (Number(id)) {
      findManyOptions = { ...findManyOptions, where: { id: Number(id) } };
    }

    if (options && options.owner_only === true) {
      findManyOptions = await auth.addOwnerCondition(findManyOptions, options, userinfo);
    }

    const result = await modelObj.findMany(findManyOptions ?? {});
    res.json(result);
  }
}

module.exports = new PrismaGet();
