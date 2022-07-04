const express = require('express')
const morgan = require('morgan')
const {ContactsRoutes} = require("./components/contacts/contacts-routes");
const app = express()
require('./database')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(ContactsRoutes.run())
module.exports = app