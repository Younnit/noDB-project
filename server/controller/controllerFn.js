let payments = []
let id = 1

module.exports = {
    createItem: (req, res) => {
        const {name, totalOwed, lender} = req.body
        let changedAmount = totalOwed
        const payment = {
            name,
            totalOwed,
            lender,
            id,
            changedAmount
        }
        id++
        payments.push(payment)
        res.status(200).send(payments)
    },
    getAll: (req, res) => {
        res.status(200).send(payments)
    },
    editItem: (req, res) => {
        const {id} = req.params
        const {changedAmount} = req.body
        const index = payments.findIndex((e) => {
            return e.id === +id
        })
        payments[index].changedAmount = changedAmount
        res.status(200).send(payments)
    },
    deleteItem: (req, res) => {
        const {id} = req.params
        const index = payments.findIndex((e) => {
            return e.id === +id
        })
        if (index === -1){
            return res.status(500).send("That loan was not found. Please try again.")
        }
        payments.splice(index, 1)
        res.status(200).send(payments)
    }
}