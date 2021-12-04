const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const postProduct = {
  body: Joi.object().keys({
    realname: Joi.string().required(),
    status: Joi.string().allow(null).allow('').required(),
    discount: Joi.string().required(),
    type: Joi.required().custom(objectId),
    category: Joi.required().custom(objectId),
    color: Joi.required(),
    size: Joi.required(),
    // categoryname: Joi.string().required(),
    cost: Joi.string().required(),
    description: Joi.string().allow(null).allow(''),
    // image: Joi.allow(null).required(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    realname: Joi.string(),
    code: Joi.string(),
    status: Joi.string(),
    discount: Joi.string(),
    type: Joi.custom(objectId),
    category: Joi.custom(objectId),
    color:Joi.array().items(Joi.string()),
    size: Joi.array().items(Joi.string()),
    cost: Joi.string(),
    description: Joi.string(),
    image: Joi.array().items(Joi.string()),
    user: Joi.custom(objectId),
    page: Joi.number().integer(),
    filters: Joi.string().allow(null).allow(''),
    types: Joi.custom(objectId).allow(null).allow(''),
    categories: Joi.custom(objectId).allow(null).allow(''),
    productid: Joi.string().allow(null).allow(''),
  }),
};

const getTypeProduct = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).allow(null).allow(''),
  }),
};

const getCategoryProduct = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).allow(null).allow(''),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    id: Joi.custom(objectId),
  }),
  body: Joi.object().keys({
        realname: Joi.string(),
        code: Joi.string(),
        status: Joi.string(),
        discount: Joi.string(),
        type: Joi.custom(objectId),
        category: Joi.custom(objectId),
        color:Joi.required(),
        size: Joi.required(),
        cost: Joi.string(),
        description: Joi.string().allow(null).allow(''),
        image: Joi.allow(null),
        updateimage: Joi.required(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
    postProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getCategoryProduct,
    getTypeProduct,
};
