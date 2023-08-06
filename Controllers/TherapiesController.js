  // Author : Vishal patel
  // Purpose : Define Offers posting and receiving logic that implemented in requests.
  import fs from "fs";
  import path from "path";
import TherapyModel from "../Models/ThearpyModel.js";
  
  //Logic function for receiving offers
  export const getThearpies = async (req, res) => {
    const data = await TherapyModel.find();
    try {
      res.status(200).json({
        message: "List of all offer",
        data,
        
      });
      console.log(res.body);
      
    } catch (error) {
      res.status(500).json({
        message: "Error on getting offes",
        error,
      });
    }
  };

export const postTheparies = async (req, res) => {
  try {
    const { Name, Slug, Priority } = await req.body;
    const fetchUrl = await req.file.location;      

    const newTherapy = new TherapyModel({
      Name,
      Slug,
      Priority,
      imageUrl: fetchUrl,
    });

    await newTherapy.save();

    res.status(201).json({ message: 'Therapy created successfully', therapy: newTherapy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create therapy' });
  }
};


// Utility function to generate slug from the therapy name
  
  // delete the therapy

  export const deleteTherapy =async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await TherapyModel.findOneAndDelete({ _id : id});
      if (!result) {
        return res.status(404).send("Therapy not found");
      }
  
      res.status(200).send("Tharpy deleted successfully");
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  