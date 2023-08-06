// Author : Sohil
// Purpose : Define FAQs creating and receiving routes

import express from "express";
//Importing logic functions from controllers
import { getFaq, postFaq } from "../Controllers/faqController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";
const faqRoute = express.Router();

//Define Request For getting FAQs.
faqRoute.get("/", getFaq);
//Define Request For creating FAQs.
faqRoute.post("/", postFaq);

export default faqRoute;
