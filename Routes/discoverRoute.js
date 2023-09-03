// Author : Sohil
// Purpose : discover experince

import express from "express";
//Importing logic functions from controllers
import { getExperience, postExperience } from '../Controllers/discoverController.js'
import {upload} from "../Middleware/imageUpload.js";
import authMiddleWare from "../Middleware/authMiddleware.js";
const discoverRoute = express.Router();

//Define Request For get discover experience
discoverRoute.get('/',getExperience)
//Define Request For post discover experience
discoverRoute.post('/',authMiddleWare,upload.single('imageUrl'),postExperience)

export default discoverRoute;