// Author : Sohil

import {City,Area} from "../Models/cityAreaModel.js";

export const getallCities = async (req, res) => {
    try {
      const cities = await City.find();
      res.json(cities);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching cities.' });
    }
  }


  export const getAreaForCity = async (req, res) => {
    const { cityId } = req.params;
    try {
      const areas = await Area.find({ city: cityId });
      res.json(areas);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching areas for the city.' });
    }
  }


  export const addCity =  async (req, res) => {
    const { name ,Priority ,Current_time } = req.body;
    try {
      const city = await City.create({ name ,Priority ,Current_time});
      res.json(city);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding a new city.' });
    }
  }

  export const addCityToArea = async (req, res) => {
    const { cityId } = req.params;
    const { name ,Priority} = req.body;
    try {
      const area = await Area.create({ name, Priority ,city: cityId });
      res.json(area);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding a new area.' });
    }
  }

  export const updateCity = async (req, res) => {
    const { cityId } = req.params;
    const { name ,Priority ,Current_time  } = req.body;
    try {
      const city = await City.findByIdAndUpdate(cityId, { name ,Priority ,Current_time }, { new: true });
      if (!city) {
        return res.status(404).json({ error: 'City not found.' });
      }
      res.json(city);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the city.' });
    }
  }

  export const updateAreaOfCity =  async (req, res) => {
    const { areaId } = req.params;
    const { name ,Priority} = req.body;
    try {
      const area = await Area.findByIdAndUpdate(areaId, { name ,Priority}, { new: true });
      if (!area) {
        return res.status(404).json({ error: 'Area not found.' });
      }
      res.json(area);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the area.' });
    }
  }

  export const deleteCity =  async (req, res) => {
    async (req, res) => {
        const { cityId } = req.params;
        try {
          // Delete the city
          await City.findByIdAndRemove(cityId);
      
          // Delete all areas associated with the city
          await Area.deleteMany({ city: cityId });
      
          res.json({ message: 'City and associated areas deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while deleting the city and associated areas.' });
        }
      }
  }

  export const deleteArea = async (req, res) => {
    const { areaId } = req.params;
    try {
      // Delete the area
      await Area.findByIdAndRemove(areaId);
      res.json({ message: 'Area deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the area.' });
    }
  }