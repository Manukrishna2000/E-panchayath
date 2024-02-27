import express from 'express'
import { AddApplication } from '../Controllers/User.js'
const router = express()


router.post('/addApplication',AddApplication)

export default router