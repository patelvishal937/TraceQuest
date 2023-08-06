// Author : Rinal Dutt
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  select_spa: {
    type: String,
    required: true,
  },
  service_name: {
    type: String,
    required: true,
  },
  service_time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  therapies: {
    type: String,
    required: true,
  },
});

const Services = mongoose.model("Services", serviceSchema);
export default Services;