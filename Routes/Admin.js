import express from 'express'
import { Addservice, viewService } from '../Controllers/AdminController.js'
const router=express()


router.post('/addservice',Addservice)
router.get('/viewservice',viewService)

export default router