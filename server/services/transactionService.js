const db = require('./../models')

module.exports = {
    transactionService1: async (data) => {
        try {
            const transaction = await db.transaction.create({ total: data.total })
            const detail = data.details.map(value => {
                return { ...value, transaction_id: transaction.dataValues.id }
            })
            await db.transaction_detail.bulkCreate(detail)
            return await db.cart.destroy({
                where: {}
            })
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