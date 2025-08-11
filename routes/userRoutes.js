import express from 'express';
import { registerUser, loginUser, getAllUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/all-users',verifyToken, getAllUser);

export default userRouter;

// npm i jsonwebtoken
