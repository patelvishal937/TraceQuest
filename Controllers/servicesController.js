// Rinal DUtt
import Services from "../Models/servicesModel.js";

// Add a new service
export const addService = async (req, res) => {
  try {
    const services = req.body;
    const createservice = await Services.create(services);
    res.status(201).json(createservice);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a service by ID
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await Services.findByIdAndRemove(id);
    res.status(204).end({ msg: "succesfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a service by ID

export const updateService = async (req, res) => {
  try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
    
      // Extract query from request headers
      const query = req.headers.query;
  
      let queryObj = {};
      if (query) {
        queryObj = JSON.parse(query);
      }
  
      const result = await Services.findOneAndUpdate({ _id: id, ...queryObj }, updates, options);
      if (!result) {
        return res.status(404).send("Data not found");
      }
  
      res.status(200).json(result);
    } catch (err) {
      res.status(500).send(err);
    }
};


// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
