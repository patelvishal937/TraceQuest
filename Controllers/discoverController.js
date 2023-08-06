// Author : Sohil
// Purpose : Define experince posting and receiving logic that implemented in requests.
//setting options for multer
import experienceModel from "../Models/discoverModel.js";

//Logic function for receiving blogs
export const getExperience = async (req, res) => {
   const data = await experienceModel.find();
  try {
    res.status(200).json({
      message: "List of all experience",
      data,
      
    });
    console.log(res.body);
    
  } catch (error) {
    res.status(500).json({
      message: "Error on getting experience",
      error,
    });
  }
}

//Logic function for creating(posting) blogs
export const postExperience = async (req, res) => {
  try {
    const data = req.body;

    const fetchUrl = await req.file.location;      

  const newExp =   new experienceModel({
    ...data,
    imageUrl: fetchUrl,
  });

    const expCreation = await experienceModel.create(newExp);
    console.log(expCreation);
    res.status(201).send("Exp. is created");
  } catch (error) {
    res.status(501).send("Error in Exp. creation")
  }
}