import express from 'express'
import { Addservice, addCategory, addMeeting, addNews, deleteCategory, viewCategory, viewNews, viewService } from '../Controllers/AdminController.js'
const router=express()


router.post('/addservice',Addservice)
router.get('/viewservice',viewService)
router.post('/meeting',addMeeting)
router.post('/category',addCategory)
router.delete('/deleteCategory/:id',deleteCategory)
router.get('/category',viewCategory)
router.post('/news',addNews)
router.get('/news',viewNews)


export default router