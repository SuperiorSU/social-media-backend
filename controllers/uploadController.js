// import cloudinary from "../config/cloudinaryConfig.js";
// import upload from "../config/multer.js";

export const uploadFile = async(req, res)=>{
  try {
    res.json({
      message: 'File uploaded successfully',
      url: req.file.path // Cloudinary URL
    });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};
    
   
