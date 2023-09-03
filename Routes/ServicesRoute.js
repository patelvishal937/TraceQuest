//Author : Rinal dutt
import express from "express";
const servicesrouter = express.Router();
//const servicesController = require('../controllers/servicesController');
import {addService,deleteService,updateService,getAllServices} from "../Controllers/servicesController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";


// Get all services
servicesrouter.get('/', getAllServices);

// Add a new service
servicesrouter.post('/',authMiddleWare, addService);

// Update a service by ID
servicesrouter.put('/:id',authMiddleWare, updateService);

// Delete a service by ID
servicesrouter.delete('/:id',authMiddleWare,deleteService);


export default servicesrouter;
