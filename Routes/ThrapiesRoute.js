// author : vishal patel
import express from 'express';
// import upload from "../Middleware/ImageMiddleware.js";
import { deleteTherapy, getThearpies, postTheparies } from '../Controllers/TherapiesController.js';
import {upload} from "../Middleware/imageUpload.js";
import authMiddleWare from "../Middleware/authMiddleware.js";

const ThearpyRouter = express.Router();


ThearpyRouter
.get('/', getThearpies)
.post('/',authMiddleWare,upload.single('imageUrl'),postTheparies)
.delete("/:id",authMiddleWare,deleteTherapy)

export default ThearpyRouter;
