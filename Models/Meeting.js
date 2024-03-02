import mongoose from "mongoose";
import Service from '../Models/Service.js'
import User from '../Models/Users.js'
const MeetingSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    
    agenda: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true,
      default:'pending'
    }
  });
  
  const Meeting = mongoose.model('Meeting', MeetingSchema);
  export default Meeting