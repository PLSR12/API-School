import express from 'express'
import PersonController from '../controllers/PersonsController'

const router = express.Router()

router.get('/persons', PersonController.getAll)
router.get('/persons/:id', PersonController.getOne)
router.post('/persons', PersonController.createPerson)
router.put('/persons/:id', PersonController.updatePerson)
router.delete('/persons/:id', PersonController.deletePerson)

export default router
