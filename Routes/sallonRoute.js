// Author : Vishal
// Purpose : Define sallon related routes

import express from "express";
//Importing logic functions from controllers.
import {
  getallSallon,
  createSallon,
  updateSallon,
  deleteSallon,
} from "../Controllers/sallonController.js";
import { upload } from "../Middleware/imageUpload.js";
import authMiddleWare from "../Middleware/authMiddleware.js";

const sallonRoute = express.Router();


sallonRoute
  // For receiving spa and it's details
  .get("/", getallSallon)
  // For creating spa.
  .post("/",authMiddleWare, upload.fields([{
    name: 'imgUrl', maxCount: 1
  }, {
    name: 'mulImgUrl', maxCount: 10
  }]), createSallon)
  // For updating details of spa.
  .put("/:id",authMiddleWare, updateSallon)
  // For deleting details of spa.
  .delete("/:id",authMiddleWare, deleteSallon);
export default sallonRoute;
