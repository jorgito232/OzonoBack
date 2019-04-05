const mongoose = require('mongoose')

const URI = process.env.DATA_BASE

const connectDB = () => mongoose.connect(URI, {useCreateIndex: true, useNewUrlParser: true , useFindAndModify: false })

module.exports = {
  connectDB
}