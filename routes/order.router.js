const express = require('express')
const router = express.Router()
// const verifyToken = require('../middleware/auth')
const { v4: uuidv4 } = require('uuid')
// const fs =require('fs')
const multer =require("multer")
let path = require('path');
const validate = require('../middleware/validate');
// const productController = require('../controllers/product.controller');
const {
    orderController,
} = require('../controllers/admin');
const orderValidation = require('../validations/order.validation');


router.route('/')
	  .get( orderController.getOrders)
	  .post( orderController.addOrder)

router.route('/:id')
	  .put( orderController.updateOrder)
	  .delete( orderController.deleteOrder)
	  .get(orderController.getDetailOrder)

module.exports = router
