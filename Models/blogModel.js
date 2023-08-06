// Author : Sohil
// Purpose : Defining blogs model/schema.
import mongoose from "mongoose";

const blogScheme = mongoose.Schema(
    {
        date: { 
            type: Date, 
            default: Date.now
        },
        type:{
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        }
    }
)

//Creating Model of schema.
const blogModel = mongoose.model("blogModel", blogScheme);
export default blogModel;