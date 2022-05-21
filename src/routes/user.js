const express = require('express')

const userRoute = express.Router()

userRoute.get('', (req, res, next) =>{
    res.json({ 'success' : true })
});

module.exports = userRoute;