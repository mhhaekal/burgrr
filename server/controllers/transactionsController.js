const db = require('./../models')
const { sequelize } = require("./../models");
const { transactionService1 } = require('./../services/transactionService')
const { transactionService2 } = require('./../services/transactionService')
const { transactionService3 } = require('./../services/transactionService')

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
            // buat jwt
            // const transaction = await db.transaction.create({ ...data, user_id: userId })
            const transaction = await transactionService1(data)
            const detail = req.body.details.map(value => {
                return { ...value, transaction_id: transaction.dataValues.id }
            })
            const transactionDetail = await transactionService2(detail)

            // const transactionDetail = await db.transaction_detail.bulkCreate({ ...data.details, transaction_id: transaction.dataValues.id })
            // console.log(transactionDetail)
            const deleteCart = await transactionService3()
            res.status(201).send({
                isError: false,
                message: 'Transaction Created',
                data: transactionDetail
            })
        } catch (error) {
            next(error)
        }
    },
}
