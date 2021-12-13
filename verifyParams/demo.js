const Joi = require('@hapi/joi');

const demo = {
  query: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required()
  })
};
const getQuery = {
    query: Joi.object({
        type: Joi.string().required(),
        nodeCollectionHash: Joi.string().required(),
        nodeId: Joi.string().required()
    })
}

module.exports = {
    demo,
    getQuery
};

