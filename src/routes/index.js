const loginRouter = require('./login')
const registerRoute = require('./register')
const userRoute = require('./user')
const welcomeRoute = require('./welcome')

module.exports = (app) =>{
    app.use('/user', userRoute)
    app.use('/register', registerRoute)
    app.use('/login', loginRouter)
    app.use('/welcome', welcomeRoute)
}