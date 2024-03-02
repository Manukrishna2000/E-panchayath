import mongoose from "mongoose";
import Service from '../Models/Service.js'
import User from '../Models/Users.js'
const WorkRequestSchema = new mongoose.Schema({
    worker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    request: {
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
    status: {
      type: String,
      required: true,
      default:'pending'
    }
  });
  
  const WorkRequest = mongoose.model('WorkRequest', WorkRequestSchema);
  export default WorkRequest