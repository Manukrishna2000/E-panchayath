import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true, 
    unique:true
  },
  description: {
    type: String,
    required: true
  },
  requirement: {
    type: String,
    required: true
  }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service
