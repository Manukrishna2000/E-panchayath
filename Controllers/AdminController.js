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