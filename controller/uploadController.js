import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECERT,
})
async function uploadImage(req,res) {
    try{
    if(!req.files || req.files.length === 0) {
        return res.status(400).json({message: "Image is required",})
    }

    const uploadedImages = [];
    for (const file of req.files){
       const result =await cloudinary.uploader.upload(req.file.path,{
        folder: "MIO AI",
    });

    uploadImage.push({
        url: result.secure_url,
        public_id: result.public_id,
    })
    }

    
    res.status(200).json({
        message: "Image upload successfully",
        count: uploadImage.length,
        images: uploadImage,
    })
   }
   catch(error) {
    console.error(error);
    res.status(500).json({
        message: "Image upload failed."
    })
   }
}

export {uploadImage};