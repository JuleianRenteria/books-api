const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
{
    title: {type: String, required: true},
    pic: {type: String, default:'http://placekitten.com/300/300'},
    description: {type: String, required: true},
    year: {type: Number, default: 1412},
    quantity: {type: Number, default: 1}
  }
)

module.exports = mongoose.model('Book', bookSchema)