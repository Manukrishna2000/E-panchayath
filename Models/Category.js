import mongoose from "mongoose";
import Service from '../Models/Service.js'
import User from '../Models/Users.js'
const CategorySchema = new mongoose.Schema({
   
    
    category: {
      type: String,
      required: true
    },
   
  });
  
  const Category = mongoose.model('Category', CategorySchema);
  export default Category