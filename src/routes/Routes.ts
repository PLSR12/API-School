import express from 'express'
import PersonController from '../controllers/PersonsController'

const router = express.Router()

router.get('/persons', PersonController.getAll)

export default router
