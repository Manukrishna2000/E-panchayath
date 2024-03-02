import express from 'express'
import { AddApplication, ApplicationById, Workrequest } from '../Controllers/User.js'
const router = express()


router.post('/addApplication',AddApplication)
router.get('/ApplicationById/:id',ApplicationById)
router.post('/workrequest',Workrequest)

export default router