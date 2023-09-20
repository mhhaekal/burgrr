const express = require('express')
const Router = express.Router()

// Import All Controller
const { productsController } = require('../controllers')
const upload = require('./../middleware/upload')
const { verify } = require("./../lib/jwt");

Router.post('/add', upload, productsController.createProduct)
Router.get('/category', productsController.getCategory)
Router.get('/all', productsController.getAllProducts)
Router.get('/all/:catId', productsController.getAllProductsByCat)
Router.post('/cart/:productId', productsController.addToCart)

module.exports = Router