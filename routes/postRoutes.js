import express from 'express';
import { createPost, deletePost, getPostById } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.post('/:userId/create', createPost);
postRouter.get('/:postId', getPostById);
postRouter.delete('/delete/:postId', deletePost)

export default postRouter;