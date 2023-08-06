//Author : Sohil Pathan
import express from "express";
const cityAreaRoutes = express.Router();
//const servicesController = require('../controllers/servicesController');
import { getallCities,getAreaForCity,addCity,addCityToArea,updateCity,updateAreaOfCity,deleteCity,deleteArea } from "../Controllers/cityAreaController.js";

// Get all cities
cityAreaRoutes.get('/cities', getallCities);
// Get all areas for a specific city
cityAreaRoutes.get('/cities/:cityId/areas',getAreaForCity);


// Add a new city
cityAreaRoutes.post('/cities', addCity);
// Add a new area to a city
cityAreaRoutes.post('/cities/:cityId/areas',addCityToArea);


// Update a city
cityAreaRoutes.put('/cities/:cityId', updateCity);
// Update an area
cityAreaRoutes.put('/areas/:areaId',updateAreaOfCity);

// Delete a city
cityAreaRoutes.delete('/cities/:cityId', deleteCity);
cityAreaRoutes.delete('/areas/:areaId', deleteArea);

export default cityAreaRoutes;
