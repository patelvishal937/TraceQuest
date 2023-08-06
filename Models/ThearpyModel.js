import mongoose from "mongoose";

const TherapyScheme = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Slug : {
        type : String,
        required : true,
    },
    Priority : {
        type : Number,
        required : true,
        validate: {
            validator: async function (priority) {
              // Check if any other therapy already has this priority assigned
              const count = await mongoose.models.TherapyModel.countDocuments({ Priority: priority });
              return count === 0; // Return true if no other therapy has this priority assigned
            },
            message: "Priority already assigned to another therapy.",
          },
          
    },
    imageUrl: {
      type: String,
      required: true,
    },
}   
);

//Creating Model of schema.
const TherapyModel = mongoose.model("TherapyModel", TherapyScheme);
export default TherapyModel;