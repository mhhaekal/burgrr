const express = require('express')
const Router = express.Router()

// Import All Controller
const { transactionsController } = require('../controllers')
const { verify } = require("./../lib/jwt");

Router.post('/', transactionsController.createTransaction)
Router.post('/detail', transactionsController.createTransactionDetail)
Router.post('/all', transactionsController.transaction)
Router.post('/total', transactionsController.getTotal)


module.exports = Router