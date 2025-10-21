const {Schema,model} = require("mongoose");
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
        //  required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default : '/images/defaultuser.webp'
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, {timestamps: true});

userSchema.pre('save' , async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password,10);
    next();
});





const User =  model('users',userSchema);
module.exports = User;