import User from "../Models/Users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const register = async (req, res, next) => {
  try {
    const {
      name,
      age,
      dob,
      gender,
      position,
      password,
      email_id,
      contact_number,
      house_name,
      location,
      district,
      pincode,
      Id_proof,
      
    } = req.body;
    if (
      !name ||
      !age ||
      !dob ||
      !gender ||
      !password ||
      !email_id ||
      !contact_number ||
      !house_name ||
      !location ||
      !district ||
      !pincode 
    ) {
      return res.status(400).json("All fields are required");
    }
    const hashedPassword=await bcrypt.hash(password,10)

    let NewUser =  new User({
        ...req.body,status:'pending',password:hashedPassword});
    let response =await NewUser.save();
    console.log(response);
    res.json(response)
  } catch (e) {
    res.json(e);
  }
};

export const login=async(req,res,next)=>{
    const {email_id,password}=req.body
    let user=await User.findOne({email_id})
    const passwordMatch=await bcrypt.compare(password,user.password)
    console.log(passwordMatch);
    if(!user){
        return res.status(401).json('invalid username or password')
    }
    if(!passwordMatch){
        return res.status(401).json('invalid username or password')
    }
    const token=jwt.sign({id:user._id,email:user.email},'abc')
    console.log(token);
    res.json({user,token})
}