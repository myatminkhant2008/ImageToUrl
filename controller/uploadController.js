import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECERT,
})
async function uploadImage(req,res) {
    try{
    if(!req.file) {
        return res.status(400).json({message: "Image is required",})
    }

    const result =await cloudinary.uploader.upload(req.file.path,{
        folder: "MIO AI",
    });

    res.status(200).json({
        message: "Image upload successfully",
        imageUrl: result.secure_url
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