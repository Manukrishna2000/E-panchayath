import Application from "../Models/Application.js"
import Meeting from "../Models/Meeting.js"
import WorkRequest from "../Models/WorkRequest.js"

export const AddApplication=async (req,res,next)=>{
    let id=req.params.id
    const newApplication=new Application({...req.body,user_id:id})
    let response=await newApplication.save()
    res.json(response)
}
export const Workrequest=async (req,res,next)=>{
    const request=new WorkRequest(req.body)
    let response=await request.save()
    res.json(response)
}

export const viewWorkRequest=async (req,res,next)=>{
    let id=req.params.id
   let response= WorkRequest.find({user_id:id})
   res.json(response)
}

export const ApplicationById=async (req,res,next)=>{
    const id=req.params.id
    let response = await Application.findById(id)
    res.json(response)
}
export const viewMeetings=async (req,res,next)=>{
    let response = await Meeting.find()
    res.json(response)
}