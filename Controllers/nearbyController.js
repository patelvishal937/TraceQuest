// author : vishal patel

import spaModel from "../Models/spaModel.js";
export const nearbySpa = async (req, res) => {
    try {
      const longitude = parseFloat(req.body.longitude);
      const latitude = parseFloat(req.body.latitude);
    
      const near = {type:'Point',coordinates: [longitude,latitude],}
      const spadata = await spaModel.aggregate([
        {
          $geoNear: {
            near,
            distanceField: 'dist.calculated',
            maxDistance: 100000,
            spherical: true,
          }
          
        },
      ]);
  
      res.status(200).json({
        msg: console.log(spadata),
        data: spadata,
  
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({error});
    }
  };
  