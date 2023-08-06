//Author : Rinal dutt
import express from "express";
const servicesrouter = express.Router();
//const servicesController = require('../controllers/servicesController');
import {addService,deleteService,updateService,getAllServices} from "../Controllers/servicesController.js";

// Get all services
servicesrouter.get('/', getAllServices);

// Add a new service
servicesrouter.post('/', addService);

// Update a service by ID
servicesrouter.put('/:id', updateService);

// Delete a service by ID
servicesrouter.delete('/:id',deleteService);


export default servicesrouter;
