import mongoose from "mongoose";
import Service from '../Models/Service.js'
import User from '../Models/Users.js'
const ApplicationSchema = new mongoose.Schema({
    service_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Service,
      required: true
    },
    member_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    currently_covered_under_ration_card: {
      type: Boolean,
      required: true
    },
    number_of_years_settled_in_the_panchayat: {
      type: Number,
      required: true
    },
    purpose: {
      type: String,
      required: true
    },
    work_experience: {
      type: String,
      required: true
    },
    info_work_experience: {
      type: String,
      required: true
    },
    status:{
        type:String,
        default:"pending"
    }
  });
  
  const Application = mongoose.model('Application', ApplicationSchema);
  export default Application