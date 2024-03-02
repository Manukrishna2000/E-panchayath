import Application from "../Models/Application.js"
import WorkRequest from "../Models/WorkRequest.js"

export const AddApplication=async (req,res,next)=>{
    const newApplication=new Application(req.body)
    let response=await newApplication.save()
    res.json(response)
}
export const Workrequest=async (req,res,next)=>{
    const request=new WorkRequest(req.body)
    let response=await request.save()
    res.json(response)
}
export const ApplicationById=async (req,res,next)=>{
    const id=req.params.id
    let response = await Application.findById(id)
    res.json(response)
}