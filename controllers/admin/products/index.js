const asyncHandler = require('../../../helpers/asyncHandler');
const getProducts = require('./getProducts');
const addProduct = require('./addProduct');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const getDetailProduct = require('./getDetailProduct');
const createProductReview = require('./createProductReview');

module.exports = {
    getProducts: asyncHandler(getProducts),
    addProduct: asyncHandler(addProduct),
    updateProduct: asyncHandler(updateProduct),
    deleteProduct: asyncHandler(deleteProduct),
    getDetailProduct: asyncHandler(getDetailProduct),
    createProductReview: asyncHandler(createProductReview),
};