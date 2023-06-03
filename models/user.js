const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'add name']
    },

    email: {
        type: String,
        required:[true, 'add email'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'add  password']
    },

},
{timestamps:true
})

const User = mongoose.model('User', userSchema);


module.exports = User;
