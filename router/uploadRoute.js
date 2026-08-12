import express from  'express';
import {uploadImage} from '../controller/uploadController.js';
import multer from 'multer';

const router = express.Router();

const upload = multer({
    dest: "Upload/",
})

router.post('/image',upload.array("images",5),uploadImage);

export {router};

