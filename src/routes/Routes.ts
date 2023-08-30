import express from 'express'
import PersonController from '../controllers/personsController'
import LevelController from '../controllers/levelsController'
import ClassController from '../controllers/classesController'

const router = express.Router()

// PERSONS
router.get('/persons', PersonController.getAll)
router.get('/persons/:id', PersonController.getOne)
router.post('/persons', PersonController.create)
router.put('/persons/:id', PersonController.update)
router.delete('/persons/:id', PersonController.delete)
router.get(
  '/persons/:studentId/registration/:registrationId',
  PersonController.getOneRegistration
)
router.post(
  '/persons/:studentId/registration',
  PersonController.createRegistration
)
router.put(
  '/persons/:studentId/registration/:registrationId',
  PersonController.updateRegistration
)
router.delete(
  '/persons/:studentId/registration/:registrationId',
  PersonController.deleteRegistration
)

// LEVELS
router.get('/levels', LevelController.getAll)
router.get('/levels/:id', LevelController.getOne)
router.post('/levels', LevelController.create)
router.put('/levels/:id', LevelController.update)
router.delete('/levels/:id', LevelController.delete)

// CLASSES
router.get('/classes', ClassController.getAll)
router.get('/classes/:id', ClassController.getOne)
router.post('/classes', ClassController.create)
router.put('/classes/:id', ClassController.update)
router.delete('/classes/:id', ClassController.delete)

export default router
