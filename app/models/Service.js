const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Service = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  atendend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['DELIVERY', 'PRODUCT', 'STAND'],
    required: true
  },
  dateStart: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateEnd: Date
})

module.exports = mongoose.model('services', Service)