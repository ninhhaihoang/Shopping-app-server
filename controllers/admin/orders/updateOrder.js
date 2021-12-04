const Product = require('../../../models/Product.model')
const { BadRequestError } = require('../../../helpers/errors')
const removeKeyNotValue = require('../../../helpers/removeKeyNotValue');

async function updateOrder(req, res, next) {
    const { realname, description, orderItems, shippingAddress, paymentMethod, taxPrice, shippingPrice, itemsPrice, totalPrice } = req.body


    let updateOrder;

    try {
        updateOrder = {
            realname,
            description,
            orderItems,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            itemsPrice,
            totalPrice
        }

        removeKeyNotValue(updateOrder);

        updateOrder = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updateOrder },
            { new: true, useFindAndModify: false }
        )

        res.status(200).send({
            success: true,
            message: "CẬP NHẬT SẢN PHẨM THÀNH CÔNG!",
            updateOrderObj: updateOrder,
        });
    } catch (error) {
        console.log(error)
        throw new BadRequestError("Error occur when update order!");
    }

}

module.exports = updateOrder;