const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');


const router = express.Router();

router.post('/signup', async (req, res) => {
    const {name, email, phone , password} = req.body;
try {
    
        const existedUser = await User.findOne({
            email: email
        });
    
        if(existedUser){
            return res.status(400).json({message:"user already exists"});
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
    
        const result = await User.create({
            name,
            email,
            phone,
            password: hashedPassword
        })
    
        const token = jwt.sign({email: result.email, id: result._id}, process.env.JSON_WEB_TOKEN_SECRET_KEY)
    
        res.status(200).json({user:result, token});         
} catch (error) {
    console.log(error);
    res.status(500).json({msg:"something went wrong"})
    
}
});

module.exports = router;