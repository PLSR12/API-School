import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Levels, { LevelAttributes } from '../db/models/Levels'

class LevelController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allLevels: LevelAttributes[] = await Levels.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, allLevels))
    } catch (error) {
      console.log(error)

      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const oneLevel: LevelAttributes | null = await Levels.findByPk(id)
      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, oneLevel))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const newLevel = req.body

    try {
      const newLevelCreated: LevelAttributes = await Levels.create(newLevel)

      return res
        .status(201)
        .send(Helper.ResponseData(201, null, null, newLevelCreated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const newDataLevel = req.body
    const { id } = req.params

    try {
      await Levels.update(newDataLevel, {
        where: { id: Number(id) },
      })
      const levelUpdated: LevelAttributes | null = await Levels.findByPk(id)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, levelUpdated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await Levels.destroy({ where: { id: Number(id) } })
      return res
        .status(204)
        .send(Helper.ResponseData(204, 'Deleted', null, null))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }
}

export default LevelController
