// Author : vishal
// Purpose : Define offers creating and receiving routes

import express from "express";
//Importing logic functions from controllers

import { getoffer, postOffer, deleteOffer } from "../Controllers/offerController.js";
import {upload} from "../Middleware/imageUpload.js";

const OfferRoute = express.Router();

//Define Request For getting Offers.

OfferRoute
  .get("/", getoffer)
  .post("/",upload.single('imageUrl'),postOffer)
  .delete("/:id", deleteOffer);

export default OfferRoute;
