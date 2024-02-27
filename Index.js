import express from 'express'
const app=express()
import './Db.js'
const port=process.env.port
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config()
import authRouter from './Routes/Auth.js'
app.use(express.json())
app.use(cors())


app.use('/',authRouter)

app.listen(4000,()=>{
    console.log(`running on ${port}`);
})