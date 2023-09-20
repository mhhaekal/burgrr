const db = require('./../models')
const { sequelize } = require("./../models");

module.exports = {
    createProduct: async (req, res, next) => {
        try {
            const data = JSON.parse(req.body.data)

            const dataImage = req.files.images[0].path

            const addProduct = await db.product.create({ ...data, product_image: dataImage })

            res.status(201).send({
                isError: false,
                message: 'Product Added',
                data: addProduct
            })
        } catch (error) {
            next(error)
        }
    },
    getCategory: async (req, res, next) => {
        try {
            const category = await db.category.findAll()

            res.status(201).send({
                isError: false,
                message: 'Get Category Success',
                data: category
            })
        } catch (error) {
            next(error)
        }
    },

    getAllProducts: async (req, res, next) => {
        try {
            const allProduct = await db.product.findAll()
            res.status(201).send({
                isError: false,
                message: 'Get All Products Success',
                data: allProduct
            })
        } catch (error) {
            next(error)
        }
    },

    getAllProductsByCat: async (req, res, next) => {
        try {
            const { catId } = req.params
            const allProductByCat = await db.product.findAll({
                where: {
                    category_id: catId
                }
            })
            res.status(201).send({
                isError: false,
                message: 'Get All Product By Category Success',
                data: allProductByCat
            })
        } catch (error) {
            next(error)
        }
    },

    addToCart: async (req, res, next) => {
        try {
            const { productId } = req.params
            // buat jwt menyusul
            // const { userId } = req.dataToken;
            const product = await db.product.findOne({
                where: {
                    id: productId
                }
            })
            const cart = await db.cart.findOne({
                where: {
                    product_id: product.id,
                }
            })
            // buat jwt menyusul
            // const cart = await db.cart.create({ product, product_id: productId, user_id: userId })
            if (cart) {
                await db.cart.update({ quantity: cart.dataValues.quantity + 1 }, { where: { id: cart.id } })
            } else {
                const addCart = await db.cart.create({ product, product_id: productId })
            }
            res.status(201).send({
                isError: false,
                message: 'Add to Cart Success',
                data: cart
            })
        } catch (error) {
            next(error)
        }
    },
}
