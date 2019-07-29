import { Request, Response } from 'express'
import * as _ from 'lodash'
import handlers from '../../api/handlers'
import Tool from './service'

class ToolController {

  getAll(req: Request, res: Response) {
    Tool
      .getAll()
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar todos tools`))
  }

  createTool(req: Request, res: Response) {
    Tool
      .create(req.body)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.dbErrorHandler, res, `Erro ao criar tool`))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar buscar tool`))
  }

  getById(req: Request, res: Response) {
    const ToolId = parseInt(req.params.id)
    Tool
    .getById(ToolId)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar tool`))
  }

  updateTool(req: Request, res: Response) {
    const ToolId = parseInt(req.params.id)
    const props = req.body
    Tool
      .update(ToolId, props)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao autualizar todos tool`))
  }

  deleteTool(req: Request, res: Response){
    const ToolId = parseInt(req.params.id)
    Tool
      .delete(ToolId)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao excluir tool`))
  }
}

export default new ToolController()
