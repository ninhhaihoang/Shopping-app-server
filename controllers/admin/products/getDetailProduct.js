const Product = require('../../../models/Product.model')
const { BadRequestError } = require('../../../helpers/errors')

async function getDetailProduct(req, res, next) {

    const findProduct = await Product.findById(req.params.id).populate('type').populate('category')

    if (!findProduct) {
        throw new BadRequestError("Lỗi khi hiển thị chi tiết sản phẩm!");
    }

    res.status(200).send({
        success: true,
        message: "Success",
        findProduct: findProduct,
    });

}

module.exports = getDetailProduct;
