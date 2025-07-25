// tags, desc->image & caption, likes, comments {user}, timestamp isPrivate, likedBy
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    noOfLikes:{
        type:Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    isPrivate:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likedBy:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

});

const Post = mongoose.model('Post', postSchema);
export default Post;