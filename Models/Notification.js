import mongoose from "mongoose";
import Service from '../Models/Service.js'
import User from '../Models/Users.js'
const NotificationSchema = new mongoose.Schema({
   
    
    notification: {
      type: String,
      required: true
    },
   
  });
  
  const Notification = mongoose.model('Notification', NotificationSchema);
  export default Notification