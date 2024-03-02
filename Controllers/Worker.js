import mongoose from "mongoose"
import WorkRequest from "../Models/WorkRequest.js"


export const viewWorkRequest=async (req,res,next)=>{
    const id=new mongoose.Types.ObjectId(req.params.id)

    let response=await WorkRequest.find({worker_id:id})
    res.json(response)
    }   

export const RequestStatus=async (req,res,next)=>{
    console.log(req.body);
    const id=req.params.id
    let response=await WorkRequest.findByIdAndUpdate(id,req.body)
    res.json(response)
}