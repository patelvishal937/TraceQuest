import logs from "../Models/logsModel.js";

// show all the logs
export const showlogs = async (req,res) => {
    try {
        const Showlog = await logs.find()
        res.status(200).json(Showlog);
    } catch (error) {
        res.status(500).send("failed to fetch logs");
    }
}
// create the logs
export const createlogs = async (req,res) => {
  
    try {
        const logsdata = req.body;
        const newlogs =  new logs(logsdata);
        const createlogs = await newlogs.save()
        res.status(201).json(createlogs);
    } catch (error) {
        res.status(501).json(error);
    }
}
// delete the logs

export const deletelogs = async (req, res) => {
    try {
      const id = req.params.id;
  
      const result = await logs.findOneAndDelete({ _id: id });
      if (!result) {
        return res.status(404).send("log not found");
      }
  
      res.status(200).send("log deleted successfully");
    } catch (err) {
      res.status(500).send(err);
    }
  };
  