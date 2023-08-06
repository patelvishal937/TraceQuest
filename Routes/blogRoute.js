// Author : Sohil
// Purpose : Define Blog creating and receiving routes

import express from "express";
//Importing logic functions from controllers
import { getBlog,postBlog } from '../Controllers/blogController.js'
const blogRoute = express.Router();

//Define Request For getting blogs.
blogRoute.get('/', getBlog)
//Define Request For creating blogs.
blogRoute.post('/', postBlog)

export default blogRoute;