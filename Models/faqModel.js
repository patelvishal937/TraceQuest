// Author : Sohil
// Purpose : Defining FAQs model/schema.
import mongoose from "mongoose";

const faqScheme = mongoose.Schema(
    {
        date: { 
            type: Date, 
            default: Date.now
        },
        que:{
            type: String,
            require: true
        },
        ans: {
            type: String,
            require: true
        }
    }
)

//Creating Model of schema.
const faqModel = mongoose.model("faqModel", faqScheme);
export default faqModel;