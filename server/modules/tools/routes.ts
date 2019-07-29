import { Request, Response } from 'express'
import ToolController from './controller'

class ToolRoutes {

  index(req: Request, res: Response) {
    return ToolController.getAll(req, res)
  }

  create(req: Request, res: Response) {
    return ToolController.createTool(req, res)
  }

  findOne(req: Request, res: Response){
    return ToolController.getById(req, res)
  }

  update(req: Request, res: Response){
    return ToolController.updateTool(req, res)
  }

  destroy(req: Request, res: Response){
    return ToolController.deleteTool(req, res)
  }
}

export default new ToolRoutes()
