import Application from "../Models/Application.js"

export const AddApplication=async (req,res,next)=>{
    const newApplication=new Application(req.body)
    let response=await newApplication.save()
    res.json(response)
}