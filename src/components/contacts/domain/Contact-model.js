const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  email: String,
  phone: String,
  firstname: String,
  lastname: String,
}, {
  collection: 'contact',
  versionKey: false
})

module.exports = mongoose.model('contact',schema)