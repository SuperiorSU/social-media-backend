import { uploadFile } from "../controllers/uploadController.js";
import upload from "../config/multer.js";
import express from 'express';

const fileRouter = express.Router()

fileRouter.post('/', upload.single('image'), uploadFile);

export default fileRouter