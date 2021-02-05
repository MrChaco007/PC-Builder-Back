const { Schema, model } = require('mongoose')

const memorySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const Memory = model('Memory', memorySchema)
module.exports = Memory