
// Author :Sohil Pathan
// Purpose : 
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  
  areas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',    
  }],
  Priority: {
    type: Number,
    required: true,
    validate: {
      validator: async function (priority) {
        // Check if any other therapy already has this priority assigned
        const count = await mongoose.models.OfferModel.countDocuments({
          Priority: priority,
        });
        return count === 0; // Return true if no other therapy has this priority assigned
      },
      message: "Priority already assigned to another therapy.",
    },
  },
  Current_time : {
    type: Date,  // Change the type to Date
    required: true,
    unique: true,
    default: Date.now,  // Set the default value to the current date and time
  },

});

const areaSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    },
    Priority: {
      type: Number,
      required: true,
      validate: {
        validator: async function (priority) {
          // Check if any other therapy already has this priority assigned
          const count = await mongoose.models.OfferModel.countDocuments({
            Priority: priority,
          });
          return count === 0; // Return true if no other therapy has this priority assigned
        },
        message: "Priority already assigned to another therapy.",
      },
    },
  });
  
export const Area = mongoose.model('Area', areaSchema);
export const City = mongoose.model('City', citySchema);

