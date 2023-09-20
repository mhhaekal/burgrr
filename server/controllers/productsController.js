const db = require('./../models')
const { sequelize } = require("./../models");
const { createProductService } = require('./../services/productService')
const { createCategoryService } = require('./../services/productService')
const { getCategoryService } = require('./../services/productService')
const { getAllProductsService } = require('./../services/productService')
const { getAllProductsByCatService } = require('./../services/productService')
const { deleteProductService1 } = require('./../services/productService')
const { deleteProductService2 } = require('./../services/productService')
const { deleteCategoryService1 } = require('./../services/productService')
const { deleteCategoryService2 } = require('./../services/productService')

module.exports = {
    createProduct: async (req, res, next) => {
        try {
            const data = JSON.parse(req.body.data)
            const dataImage = req.files.images[0].path
            const addProduct = await createProductService(data, dataImage)
            res.status(201).send({
                isError: false,
                message: 'Product Added',
                data: addProduct
            })
        } catch (error) {
            next(error)
        }
    },
    createCategory: async (req, res, next) => {
        try {
            const data = req.body
            const addCategory = await createCategoryService(data)
            res.status(201).send({
                isError: false,
                message: 'Product Added',
                data: addCategory
            })
        } catch (error) {
            next(error)
        }
    },
    getCategory: async (req, res, next) => {
        try {
            const category = await getCategoryService()
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
            const allProduct = await getAllProductsService()
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
            const allProductByCat = await getAllProductsByCatService(catId)
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
                await db.cart.create({ product, product_id: productId })
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
    deleteProduct: async (req, res, next) => {
        try {
            const { productId } = req.params
            const allProduct = await deleteProductService1(productId)
            await deleteProductService2(productId)
            res.status(201).send({
                isError: false,
                message: 'Get All Products Success',
                data: allProduct
            })
        } catch (error) {
            next(error)
        }
    },
    deleteCategory: async (req, res, next) => {
        try {
            const { categoryId } = req.params
            const allCategory = await deleteCategoryService1()
            await deleteCategoryService2()
            res.status(201).send({
                isError: false,
                message: 'Get All Products Success',
                data: allCategory
            })
        } catch (error) {
            next(error)
        }
    },
}
