import { Request, Response } from 'express'
import Helper from '../helper/Helper'
import Classes, { ClassAttributes } from '../db/models/Classes'

class ClassController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const allClass: ClassAttributes[] = await Classes.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, allClass))
    } catch (error) {
      console.log(error)

      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const oneClass: ClassAttributes | null = await Classes.findByPk(id)
      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, oneClass))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const newClass = req.body

    try {
      const newClassCreated: ClassAttributes = await Classes.create(newClass)

      return res
        .status(201)
        .send(Helper.ResponseData(201, null, null, newClassCreated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const newDataClass = req.body
    const { id } = req.params

    try {
      await Classes.update(newDataClass, {
        where: { id: Number(id) },
      })
      const classUpdated: ClassAttributes | null = await Classes.findByPk(id)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, classUpdated))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }

  static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await Classes.destroy({ where: { id: Number(id) } })
      return res
        .status(204)
        .send(Helper.ResponseData(204, 'Deleted', null, null))
    } catch (error) {
      return res.status(500).send(Helper.ResponseData(500, '', error, null))
    }
  }
}

export default ClassController
