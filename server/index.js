const express = require('express')
const controllerFn = require('./controller/controllerFn')

const app = express()
app.use(express.json())

app.get('/api/payments', controllerFn.getAll)
app.post('/api/payments', controllerFn.createItem)
app.put('/api/payments/:id', controllerFn.editItem)
app.delete('/api/payments/:id', controllerFn.deleteItem)

const PORT = 4004
app.listen(PORT,() => console.log(`Server is running on port: ${PORT}`))