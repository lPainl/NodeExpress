import { Request, Response } from 'express'
import TemplateService from '../services/template.service'
import { mapCollection, mapEntity } from '../utils/mapper'
import { parseId } from '../utils/parse'

export default class TemplateController {
    public static async getAllCollection(req: Request, res: Response) {
        // validateParams
        try {
            return res.status(200).json(await TemplateService.getCollection())
        } catch (e) {
            return res.status(400).json('Invalid Body')
        }
    }

    public static async createCollection(req: Request, res: Response) {
        // validateParams
        const body = req.body
        try {
            const newCollection = mapCollection(body)
            return res.status(200).json(await TemplateService.createCollection(newCollection))
        } catch (e) {
            return res.status(400).json('Invalid Body')
        }
    }

    public static async updateCollection(req: Request, res: Response) {
        // validateParams
        const body = req.body
        try {
            return res.status(200).json(await TemplateService.updateCollection(body))
        } catch (e) {
            return res.status(400).json('Invalid Body')
        }
    }

    public static async deleteCollection(req: Request, res: Response) {
        // validateParams
        const body = req.body
        try {
            return res.status(200).json(await TemplateService.deleteCollection(body))
        } catch (e) {
            return res.status(400).json('Invalid Body')
        }
    }

    public static async getEntity(req: Request, res: Response) {
        try {
            // validateParams
            const { id } = req.params
            let statusCode = 404
            const entityId = parseId(+id)
            const entityFounded = await TemplateService.getEntity(entityId)
            if (entityFounded) {
                statusCode = 200
            }
            return res.status(statusCode).json(entityFounded)
        } catch (e) {
            return res.status(400).json(`Invalid Body. Reason:[${e}]`)
        }
    }

    public static async createEntity(req: Request, res: Response) {
        // validateParams
        try {
            const newEntity = mapEntity(req.body)
            return res.status(200).json(await TemplateService.createEntity(newEntity))
        } catch (e) {
            return res.status(400).json('Invalid Body')
        }
    }
}
