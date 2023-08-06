// Author : Sohil
// Purpose : discover experince

import express from "express";
//Importing logic functions from controllers
import { getExperience, postExperience } from '../Controllers/discoverController.js'
import {upload} from "../Middleware/imageUpload.js";

const discoverRoute = express.Router();

//Define Request For get discover experience
discoverRoute.get('/',getExperience)
//Define Request For post discover experience
discoverRoute.post('/',upload.single('imageUrl'),postExperience)

export default discoverRoute;