import express from 'express'
import PersonController from '../controllers/PersonsController'
import LevelController from '../controllers/levelsController'

const router = express.Router()

router.get('/persons', PersonController.getAll)
router.get('/persons/:id', PersonController.getOne)
router.post('/persons', PersonController.create)
router.put('/persons/:id', PersonController.update)
router.delete('/persons/:id', PersonController.delete)

router.get('/levels', LevelController.getAll)
router.get('/levels/:id', LevelController.getOne)
router.post('/levels', LevelController.create)
router.put('/levels/:id', LevelController.update)
router.delete('/levels/:id', LevelController.delete)

export default router
