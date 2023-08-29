import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Persons, { PersonAttributes } from '../db/models/Persons'

class PersonController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allPersons: PersonAttributes[] = await Persons.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, 'Getted', null, allPersons))
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
        .send(Helper.ResponseData(200, 'Getted', null, onePerson))
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
        .send(Helper.ResponseData(201, 'Created', null, newPersonCreated))
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
        .send(Helper.ResponseData(200, 'Updated', null, personUpdated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await Persons.destroy({ where: { id: Number(id) } })
      return res.status(200).send(
        Helper.ResponseData(200, 'Deleted', null, {
          message: 'deleted successfully',
        })
      )
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }
}

export default PersonController
