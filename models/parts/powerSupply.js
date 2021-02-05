const { Schema, model } = require('mongoose')

const powerSupplySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    spec: { type: String, required: true },
})

const PowerSupply = model('PowerSupply', powerSupplySchema)
module.exports = PowerSupply