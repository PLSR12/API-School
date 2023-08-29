import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Levels, { LevelAttributes } from '../db/models/Levels'

class LevelController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allLevels: LevelAttributes[] = await Levels.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, 'Getted', null, allLevels))
    } catch (error) {
      console.log(error)

      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const onePerson: LevelAttributes | null = await Levels.findByPk(id)
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
      const newPersonCreated: LevelAttributes = await Levels.create(newPerson)

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
      await Levels.update(newDataPerson, {
        where: { id: Number(id) },
      })
      const personUpdated: LevelAttributes | null = await Levels.findByPk(id)

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
      await Levels.destroy({ where: { id: Number(id) } })
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

export default LevelController
