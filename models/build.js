const { Schema, model } = require('mongoose')
const userSchema = require('./user')
const processorSchema = require('./parts/processor')
const motherboardSchema = require('./parts/motherboard')
const storageSchema = require('./parts/storage')
const powerSupplySchema = require('./parts/powerSupply')
const gpuSchema = require('./parts/gpu')
const memorySchema = require('./parts/memory')


const buildSchema = new Schema({
    name: {type: String, required: true},
    userName: userSchema,
    processor: processorSchema,
    motherboard: motherboardSchema,
    storage: storageSchema,
    powerSupply: powerSupplySchema,
    gpu: gpuSchema,
    memory: memorySchema
})

const Build = model('Build', buildSchema)
module.exports = Build