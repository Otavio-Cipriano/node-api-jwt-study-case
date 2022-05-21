const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../model/user')

const register = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!(email && password && name)) {
            res.status(400).send("All inputs are required");
        }

        const oldUSer = await User.findOne({ email })
        
        if(oldUSer){
            res.status(409).send("User already exist. Please Login");
        }

        const encryptPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name,
            email: email,
            password: encryptPass
        });

        const token = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h'
            }
        )

        user.token = token;

        res.status(201).json(user)
    }
    catch(err){
        console.log(err);
    }
}

module.exports = register;