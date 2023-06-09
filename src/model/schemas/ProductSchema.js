const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  urlImg: {
    type: String,
    required: true
  },
})

module.exports = model("Products", ProductSchema)
