const db = require('./../models')

module.exports = {
    transactionService1: async (data) => {
        try {
            return await db.transaction.create({ ...data })
        } catch (error) {
            return error
        }
    },
    transactionService2: async (detail) => {
        try {
            return await db.transaction_detail.bulkCreate(detail)
        } catch (error) {
            return error
        }
    },
    transactionService3: async () => {
        try {
            return await db.cart.destroy({
                where: {}
            })
        } catch (error) {
            return error
        }
    },
}