import express from 'express';
import dbConnect from './config/dbConfig.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';



dotenv.config();
const app = express()

// To enable CORS
app.use(cors({
  origin: ['http://localhost:5173']
}));
// To parse JSON via request body
app.use(express.json());

// user api routes 
app.use('/api/users', userRouter)
app.use('/api/post', postRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Database connection
dbConnect()

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT || 5000}`)
})
