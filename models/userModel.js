import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        default: "Hey there! I am using this app."
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        enum: ['male', 'frmale', 'other'],
    },
    password:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema);
export default User;