const { Schema, model } = require('mongoose')

const storageSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const Storage = model('Storage', storageSchema)
module.exports = Storage