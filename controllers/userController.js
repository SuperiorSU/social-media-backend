// login, register, updateProfile

import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
export const registerUser = async(req, res)=>{
    try{
        const {firstName, lastName, email, password, userName} = req.body

        if(!firstName || !lastName ||!email || !password || !userName){
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.status(400).json({
                message: "User already exists with this email"
            })
        }
        const hashedPaswd = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPaswd,
            userName
        });

        await newUser.save();
        return res.status(201).json({
            message: "User registered successfully",
            success: true
        })
    }
    catch(err){
        console.error("Error in registerUser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const loginUser = async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required"
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "User not found"
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Invalid password"
            });
        }
        // 1. user data object  |  2. JWT SECRET (non-object)  |   3. (object) Token Features(expiry, type, security etc)
        const token = jwt.sign({
            id: user._id,
            email: user.email,
            userName: user.userName
        },process.env.JWT_SECRET,{
            expiresIn:'1d'
        })
        console.log("token length",token.length)

        return res.status(200).json({
            message: "Login successful",
            token
        });
    }
    catch(err){
        console.error("Error in loginUser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllUser = async(req, res)=>{
    try{
        const users = await User.find({}, '-password')
        return res.status(200).json({
            message: "Users fetched successfully",
            users
        });
    }
    catch(err){
        console.error("Error in getAllUser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}