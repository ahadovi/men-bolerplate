const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../schemas/userSchema');
const User = new mongoose.model('User', userSchema);

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({
            message: 'Signup Successful!'
        });
    } catch {
        res.status(500).json({
            message: 'Signup failed!'
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.find({userName: req.body.userName});
        if (user && user?.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (isValidPassword) {
                //==Generate token
                const token = await jwt.sign({
                    name: user[0].name,
                    userName: user[0].userName,
                    email: user[0].email,
                    userId: user[0]._id,
                }, process.env.COOKIE_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    access_token: token,
                    message: 'Authentication success!'
                });
            } else {
                res.status(401).json({
                    message: 'Authentication failed!'
                });
            }
        } else {
            res.status(401).json({
                message: 'Authentication failed!'
            });
        }
    } catch {
        res.status(401).json({
            message: 'Authentication failed!'
        });
    }

})

module.exports = router;
