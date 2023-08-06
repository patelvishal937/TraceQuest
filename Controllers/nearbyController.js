// author : vishal patel

import spaModel from "../Models/spaModel.js";
export const nearbySpa = async (req, res) => {
    try {
      const longitude = parseFloat(req.body.longitude);
      const latitude = parseFloat(req.body.latitude);
    
  
      const spadata = await spaModel.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            distanceField: 'dist.calculated',
            maxDistance: 1000 * 1609,
            spherical: true,
          },
        },
      ]);
  
      res.status(200).json({
        msg: console.log(spadata),
        data: spadata,
  
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: 'Failed to fetch data' });
    }
  };
  