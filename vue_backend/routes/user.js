const {User, validate} = require('../models/user');
const router = require('express').Router();
const bcrypto = require('bcrypt');
const _ = require('lodash')

router.post('/login', async(req, res, next)=>{
    let user = await User.findOne({email:req.body.email});
    if(user && await bcrypto.compare(req.body.password, user.password)){
        const token = user.generateAuthToken();
        console.log(req.body);
        return      res.header('x-auth-token', token).status(200).send(token.value);
    }
    res.send('email yoki parol noto\'gri')
})

router.post('/signup', async(req, res, next)=>{
    // console.log(req.body);
        // res.send(req.body);
        
        let user = await  User.findOne({ email: req.body.email });
        if(user){
           res.status(400).send(new Error("mavjud bo'lgan foydalanuvchi")) 
        }

        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin:0
        });

        const salt = await bcrypto.genSalt();
        user.password = await bcrypto.hash(user.password, salt);
        await user.save();
        res.send(_.pick(user    , ['_id', 'username', 'email', 'isAdmin']));
        console.log(user.password);
})

module.exports = router;