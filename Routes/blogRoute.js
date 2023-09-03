// Author : Sohil
// Purpose : Define Blog creating and receiving routes

import express from "express";
//Importing logic functions from controllers
import { getBlog,postBlog } from '../Controllers/blogController.js'
import authMiddleWare from "../Middleware/authMiddleware.js";
const blogRoute = express.Router();

//Define Request For getting blogs.
blogRoute.get('/',authMiddleWare, getBlog)
//Define Request For creating blogs.
blogRoute.post('/',authMiddleWare, postBlog)

export default blogRoute;