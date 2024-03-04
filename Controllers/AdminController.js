import Category from "../Models/Category.js"
import Meeting from "../Models/Meeting.js"
import News from "../Models/News.js"
import Service from "../Models/Service.js"

export const Addservice=async(req,res,next)=>{
    const{
        service,
        description,
        requirement
    }=req.body
    if(!service || !description || !requirement){
        return res.status(400).json("All fields are required")
    }
    const newService=new Service(req.body)
    let response=await newService.save()
    res.json(response)
}

export const viewService=async (req,res,next)=>{
    try{

        let response =await Service.find()
        res.json(response)
    }
    catch(e){
        res.json(e)

    }

}

export const addMeeting=async(req,res,next)=>{
    try{
        let newMeeting=new Meeting(req.body)
        let response=await newMeeting.save()
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}
export const addCategory=async(req,res,next)=>{
    try{
        let newMeeting=new Category(req.body)
        let response=await newMeeting.save()
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}
export const deleteCategory=async(req,res,next)=>{
    try{
        let id=req.params.id
        let response=await Category.findByIdAndDelete(id)
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}
export const viewCategory=async(req,res,next)=>{
    try{
        let response=await Category.find()
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}
export const addNews=async(req,res,next)=>{
    try{
        let newNews=await News(req.body)
        let response=await newNews.save()
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}
export const viewNews=async(req,res,next)=>{
    try{
        let response=await News.find()
        res.json(response)
        console.log(response);
    }
    catch(e){
        res.json(e)
    }
}