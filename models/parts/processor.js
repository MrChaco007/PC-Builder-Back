const { Schema, model } = require('mongoose')

const processorSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const Processor = model('Processor', processorSchema)
module.exports = Processor