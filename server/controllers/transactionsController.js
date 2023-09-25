const { log } = require('handlebars');
const db = require('./../models')
const { sequelize } = require("./../models");
const { transactionService1 } = require('./../services/transactionService')
const { transactionService2 } = require('./../services/transactionService')
const { transactionService3 } = require('./../services/transactionService')
const { transactionService4 } = require('./../services/transactionService')

module.exports = {
    createTransaction: async (req, res, next) => {
        try {
            // buat jwt menyusul
            // const { userId } = req.dataToken;
            const data = req.body
            // buat jwt
            // const transaction = await db.transaction.create({ ...data, user_id: userId })
            const transaction = await db.transaction.create({ ...data })
            // console.log(transaction.dataValues.id)
            res.status(201).send({
                isError: false,
                message: 'Transaction Created',
                data: transaction
            })
        } catch (error) {
            next(error)
        }
    },
    createTransactionDetail: async (req, res, next) => {
        try {
            // buat jwt menyusul
            // const { userId } = req.dataToken;
            const data = req.body
            // buat jwt
            // const transaction = await db.transaction.create({ ...data, user_id: userId })
            const transactionDetail = await db.transaction_detail.bulkCreate(data)
            console.log(data)
            res.status(201).send({
                isError: false,
                message: 'Transaction Created',
                data: transactionDetail
            })
        } catch (error) {
            next(error)
        }
    },
    transaction: async (req, res, next) => {
        try {
            // buat jwt menyusul
            // const { userId } = req.dataToken;
            const data = req.body
            const transaction = await transactionService1(data)
            res.status(201).send({
                isError: false,
                message: 'Transaction Created',
                data: transaction
            })
        } catch (error) {
            next(error)
        }
    },
    getTotal: async (req, res, next) => {
        try {
            const data = req.body.createdAt
            const total = await transactionService4(data)
            res.status(201).send({
                isError: false,
                message: 'Get Total Success',
                data: total
            })
        } catch (error) {
            next(error)
        }
    }
}
