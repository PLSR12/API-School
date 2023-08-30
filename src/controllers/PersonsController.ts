import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Persons, { PersonAttributes } from '../db/models/Persons'
import Registrations from '../db/models/Registrations'

class PersonController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allPersons: PersonAttributes[] = await Persons.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, allPersons))
    } catch (error) {
      console.log(error)

      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const onePerson: PersonAttributes | null = await Persons.findByPk(id)
      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, onePerson))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const newPerson = req.body

    try {
      const newPersonCreated: PersonAttributes = await Persons.create(newPerson)

      return res
        .status(201)
        .send(Helper.ResponseData(201, null, null, newPersonCreated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const newDataPerson = req.body
    const { id } = req.params

    try {
      await Persons.update(newDataPerson, {
        where: { id: Number(id) },
      })
      const personUpdated: PersonAttributes | null = await Persons.findByPk(id)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, personUpdated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await Persons.destroy({ where: { id: Number(id) } })
      return res
        .status(204)
        .send(Helper.ResponseData(204, 'Deleted successfully', null, null))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async getOneRegistration(req: Request, res: Response) {
    const { studentId, registrationId } = req.params

    try {
      const oneRegistration = await Registrations.findOne({
        where: { id: Number(registrationId), student_id: Number(studentId) },
      })

      return res
        .status(201)
        .send(Helper.ResponseData(200, null, null, oneRegistration))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async createRegistration(req: Request, res: Response) {
    const { studentId } = req.params
    const newRegistration = { student_id: studentId, ...req.body }

    try {
      const newRegistrationCreated = await Registrations.create(newRegistration)

      return res
        .status(201)
        .send(Helper.ResponseData(201, null, null, newRegistrationCreated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async updateRegistration(req: Request, res: Response) {
    const { studentId, registrationId } = req.params
    const newDataRegistration = req.body

    try {
      await Registrations.update(newDataRegistration, {
        where: { id: Number(registrationId), student_id: Number(studentId) },
      })
      const registrationUpdated = await Registrations.findByPk(registrationId)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, registrationUpdated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async deleteRegistration(req: Request, res: Response) {
    const { registrationId } = req.params

    try {
      await Registrations.destroy({
        where: { id: Number(registrationId) },
      })
      return res
        .status(204)
        .send(Helper.ResponseData(204, 'Deleted successfully', null, null))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }
}

export default PersonController
