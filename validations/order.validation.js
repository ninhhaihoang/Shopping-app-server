const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const postOrder = {
  body: Joi.object().keys({
    status: Joi.string().allow(null).allow('').required(),
    total: Joi.string().required(),
    received: Joi.string().required(),
    exchange: Joi.string().required(),
    description: Joi.string().allow(null).allow(''),
    products: Joi.array().required(),
    // image: Joi.allow(null).required(),
  }),
};

const getOrders = {
  query: Joi.object().keys({
    status: Joi.string().allow(null).allow(''),
    total: Joi.string(),
    received: Joi.string(),
    exchange: Joi.string(),
    description: Joi.string().allow(null).allow(''),
    products: Joi.array(),
    page: Joi.number().integer(),
    filters: Joi.string().allow(null).allow(''),
  }),
};


const getOrder = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateOrder = {
  params: Joi.object().keys({
    id: Joi.custom(objectId),
  }),
  body: Joi.object().keys({
        status: Joi.string().allow(null).allow(''),
        code: Joi.string(),
        total: Joi.string(),
        received: Joi.string(),
        exchange: Joi.string(),
        description: Joi.string().allow(null).allow(''),
        products: Joi.array(),
    })
    .min(1),
};

const deleteOrder = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
    postOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};
