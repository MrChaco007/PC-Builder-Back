const { Schema, model } = require("mongoose");
const userSchema = require("./user").schema;
const processorSchema = require("./parts/processor").schema;
const motherboardSchema = require("./parts/motherboard").schema;
const storageSchema = require("./parts/storage").schema;
const powerSupplySchema = require("./parts/powerSupply").schema;
const gpuSchema = require("./parts/gpu").schema;
const memorySchema = require("./parts/memory").schema;

const buildSchema = new Schema({
  name: { type: String, required: true },
  userName: userSchema,
  processor: processorSchema,
  motherboard: motherboardSchema,
  storage: storageSchema,
  powerSupply: powerSupplySchema,
  gpu: gpuSchema,
  memory: memorySchema,
  price: { type: Number, required: true },
});

const Build = model("Build", buildSchema);
module.exports = Build;
