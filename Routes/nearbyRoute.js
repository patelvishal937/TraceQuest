// author : vishal patel 
// to define the routes of nearbylocation

import express from "express";
import {nearbySpa}  from "../Controllers/nearbyController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";
const nearbyRoute = express.Router();

nearbyRoute
.post("/nearbyspalocation",authMiddleWare,nearbySpa);

export default nearbyRoute;