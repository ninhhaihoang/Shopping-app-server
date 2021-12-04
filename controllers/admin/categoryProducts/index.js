const asyncHandler = require('../../../helpers/asyncHandler');
const getCategories = require('./getCategories')

module.exports = {
    getCategories: asyncHandler(getCategories),
};