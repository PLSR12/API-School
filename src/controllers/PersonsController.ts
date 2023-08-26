import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Persons from '../db/models/Persons'

class PersonController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allPersons = await Persons.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, 'Getted', null, allPersons))
    } catch (error) {
      console.log(error)

      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  //   static async getOne(req, res) {
  //     const { id } = req.params
  //     try {
  //       const onePerson = await database.persons.findByPk(id)
  //       return res.status(200).json(onePerson)
  //     } catch (error) {
  //       return res.status(500).json(error.message)
  //     }
  //   }
}

export default PersonController
