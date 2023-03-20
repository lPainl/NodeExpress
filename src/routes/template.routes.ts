import express from 'express'
import TemplateController from '../controllers/template.controller'

const templateRouter = express.Router()

templateRouter.get('/', TemplateController.getAllCollection)
templateRouter.post('/', TemplateController.createCollection)
templateRouter.put('/', TemplateController.updateCollection)
templateRouter.delete('/', TemplateController.deleteCollection)

templateRouter.get('/:id', TemplateController.getEntity)
templateRouter.post('/:id', TemplateController.createEntity)

export default templateRouter
