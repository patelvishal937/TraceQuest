// Author : Vishal patel
// Purpose : Define Offers posting and receiving logic that implemented in requests.
import OfferModel from "../Models/offerModel.js";
//Logic function for receiving offers
export const getoffer = async (req, res) => {
  const data = await OfferModel.find();
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

//Logic function for creating offers

export const postOffer = async (req, res) => {
    try {
      const { Name, Slug, Select_Spa, Priority } = await req.body;
      const fetchUrl = await req.file.location;      
  
      const newOffer =   new OfferModel({
        Name,
        Slug,
        Select_Spa,
        Priority,
        imageUrl: fetchUrl,
      });
  
      await newOffer.save();
  
      res.status(201).json({ message: 'Therapy created successfully', offer: newOffer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create therapy' });
    }
  };

//Logic function for delete offers
export const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await OfferModel.findOneAndDelete({ _id : id});
    if (!result) {
      return res.status(404).send("Offer not found");
    }

    res.status(200).send("Offer deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};



