import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv'

dotenv.config()
const user = User.findById('68889310813f292ab9e5d5d7')
// console.log(user)
const token = jwt.sign({ id: user.id, userName: user.userName }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  console.log(token)


  
