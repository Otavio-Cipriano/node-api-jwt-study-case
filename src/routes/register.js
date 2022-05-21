const register = require('../controller/register')
const express = require('express')

const registerRoute = express.Router()

registerRoute.post('', register)

module.exports = registerRoute;