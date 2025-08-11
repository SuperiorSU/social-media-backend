import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();



export const verifyToken = async(req, res, next)=>{
    try{
        const header = req.headers["authorization"];
        const token = header.split(" ")[1];
        if(!token){
            return res.status(401).json({ message: "No token provided" });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err)=>{
            if(err){
                return res.status(403).json({ message: "Invalid token" });
            }
            // If token is valid, proceed to the next middleware or route handler
            next();
        })

    }
    catch(err){
        console.error("Error in verifyToken:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}