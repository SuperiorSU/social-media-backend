// create, deletePost, likePost, getPosts, getPostById, updatePost
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

export const createPost = async(req, res)=>{
    try{
        const userId = req.params.userId;
;
        const { title, desc, image, isPrivate } = req.body;
        if(!title || !desc || !image){
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        console.log('user id', userId)
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        const newPost = new Post({
            title,
            desc,
            image,
            isPrivate,
            createdBy: userId
        })
        await newPost.save();
        user.posts.push(newPost._id);
        await user.save();

        return res.status(201).json({
            message: "Post created successfully",
            post: newPost
        })
        
    }
    catch(err){
        console.error("Error in createPost:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getPostById = async(req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId).populate().select('-createdBy -__v');
        
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        } 
        return res.status(200).json(post);
    } catch (err) {
        console.error("Error in getPostById:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deletePost = async(req,res)=>{
    try{
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if(!post){
            return res.status(404).json({
                message: "Post not found"
            });
        }
        if(post.createdBy.toString() !== req.user._id.toString()){
            return res.status(403).json({
                message: "You are not authorized to delete this post"
            });
        }
        await Post.findByIdAndDelete(postId);
        const user = await User.findById(post.createdBy);
        user.posts = user.posts.filter(p => p.toString() !== postId);
        await user.save();
        return res.status(200).json({
            message: "Post deleted successfully"
        });
    }
    catch(err){
        console.error("Error in deletePost:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
