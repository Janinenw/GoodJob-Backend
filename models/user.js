const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'add name']
    },

    email: {
        type: String,
        required:[true, 'add email']
        unique: true
    },

    password: {
        required: [true, 'add  password']
    }

},
{timestamps:true
})

const User = mongoose.model('User', UserSchema);


module.exports = User;