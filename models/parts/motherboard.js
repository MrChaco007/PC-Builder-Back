const { Schema, model } = require('mongoose')

const motherboardSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const Motherboard = model('Motherboard', motherboardSchema)
module.exports = Motherboard