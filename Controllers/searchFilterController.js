// Author : Vishal
// Purpose : Define Search and filter operation logic that implemented in requests.
import spaModel from "../Models/spaModel.js";

//Logic function for Search spa by name,area and city
export const searchSpa = async (req, res) => {
  
    try {
        const { name , area , city } = req.query;
        const queryobject = {};
        if(name)
        {
          queryobject.name = { $regex : name ,$options : "i"};
          console.log(queryobject.catagory);
        }

        if(area)
        {
          queryobject.area = area;
          console.log(queryobject.area);
        }

        if(city)
        {
          queryobject.city = city;
          console.log(queryobject.catagory);
        }

        const data = await spaModel.find(queryobject);
        res.status(200).json({data});
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch spas' });
      }
};


//Logic function for Filter spa by catagory
export const filterSpa = async (req, res) => {
    try {
        const { catagory } = req.query;
        const queryobject = {};
        if(catagory)
        {
          queryobject.catagory = catagory;
          console.log(queryobject.catagory);
        }
        const data = await spaModel.find(queryobject);
        res.status(200).json({data});
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch spas' });
      }
};
