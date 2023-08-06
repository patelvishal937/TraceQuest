// Author : Sohil
// Purpose : Defining experince model/schema.
import mongoose from "mongoose";

const experienceScheme = mongoose.Schema(
    {
        date: { 
            type: Date, 
            default: Date.now
        },
        title: {
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        imageUrl: {
            type: String,
            required: true,
          }
    }
)

//Creating Model of schema.
const experienceModel = mongoose.model("experienceModel", experienceScheme);
export default experienceModel;