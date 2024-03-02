import express from 'express'
import { RequestStatus, viewWorkRequest } from '../Controllers/Worker.js'
const router = express()


router.get('/request/:id',viewWorkRequest)
router.post('/requeststatus/:id',RequestStatus)

export default router