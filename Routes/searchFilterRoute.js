// Author : Vishal
// Purpose : Define spa searching and filtering routes
import express from "express";
//Importing logic functions from controllers.
import {searchSpa,filterSpa} from "../Controllers/searchFilterController.js";

const searchFilterRoute = express.Router();

//Define Request For Search and Filter.
searchFilterRoute
.get("/search",searchSpa)
.get("/filter",filterSpa)

export default searchFilterRoute;
