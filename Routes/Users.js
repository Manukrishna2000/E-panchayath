import express from 'express'
import { AddApplication, ApplicationById, Workrequest, viewMeetings } from '../Controllers/User.js'
const router = express()


router.post('/addApplication',AddApplication)
router.get('/ApplicationById/:id',ApplicationById)
router.post('/workrequest',Workrequest)
router.get('/meetings',viewMeetings)

export default router