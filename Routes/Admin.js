import express from 'express'
import { Addservice, addMeeting, viewService } from '../Controllers/AdminController.js'
const router=express()


router.post('/addservice',Addservice)
router.get('/viewservice',viewService)
router.post('/meeting',addMeeting)

export default router