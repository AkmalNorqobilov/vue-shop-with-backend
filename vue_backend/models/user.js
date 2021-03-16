const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('json-web-token');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:0

    }
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.encode('my@uth&&p@g&', {_id:this._id, isAdmin:this.isAdmin, username:this.username, email:this.email});
    return token;
}

const User = new mongoose.model('User', userSchema);


function validateUser(user){
    const schema = {
         username:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required().min(8),
        isAdmin: Joi.string().required().default(0)
    }

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate =validateUser;