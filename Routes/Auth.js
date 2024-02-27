import express from "express";
import {
    login,
    register,
    
} from "../Controllers/Auth.js";

const router = express.Router();

// CREATE
router.post("/register", register)
router.post("/login",login)

export default router;