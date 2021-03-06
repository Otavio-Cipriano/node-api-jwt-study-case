require('dotenv').config()
require("./config/databse").connect();
const express = require("express")

const app = express()

app.use(express.json())

require('./routes')(app)

module.exports = app