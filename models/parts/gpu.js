const { Schema, model } = require('mongoose')

const gpuSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const Gpu = model('Gpu', gpuSchema)
module.exports = Gpu