import express from 'express'
import { AddApplication, ApplicationById, Workrequest, viewMeetings, viewWorkRequest } from '../Controllers/User.js'
const router = express()


router.post('/addApplication/:id',AddApplication)
router.get('/ApplicationById/:id',ApplicationById)

router.post('/workrequest',Workrequest)
router.get('/workrequest/:id',viewWorkRequest)
router.get('/meetings',viewMeetings)

export default router