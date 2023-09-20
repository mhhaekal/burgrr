const db = require('./../models')
const { sequelize } = require("./../models");

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
            const transaction = await db.transaction.create({ ...data })
            const transactionDetail = await db.transaction_detail.bulkCreate({ data, transaction_id: transaction.dataValues.id })
            // console.log(data)
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
