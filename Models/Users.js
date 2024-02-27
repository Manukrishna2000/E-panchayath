import mongoose from "mongoose";
const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 45,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  dob: {
    type: String,
    maxlength: 45,
    required: true
  },
  gender: {
    type: String,
    maxlength: 45,
    required: true
  },
  position: {
    type: String,
    maxlength: 45,
    
  },
  password: {
    type: String,
    required: true
  },
  email_id: {
    type: String,
    maxlength: 45,
    required: true,
    unique:true
  },
  contact_number: {
    type: String,
    maxlength: 45,
    required: true
  },
  house_name: {
    type: String,
    maxlength: 45,
    required: true
  },
  location: {
    type: String,
    maxlength: 45,
    required: true
  },
  district: {
    type: String,
    maxlength: 45,
    required: true
  },
  pincode: {
    type: String,
    maxlength: 45,
    required: true
  },
  id_proof: {
    type: String,
    maxlength: 200,
    // required: true
  },
  status:{
    type:String,
    required:true
  },
  userType:{
    type:String,
    required:true
  }
});

const User = mongoose.model('User', staffSchema);


export default User