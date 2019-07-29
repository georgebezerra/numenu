import { ITool, createTool, createTools } from './interface'
import * as Bluebird from 'bluebird'
const model = require('../../models')

class Tool implements ITool {
  
  public id: number
  public title: string
  public link: string
  public description: string
  public tags: string


  create(tool: any){
    return model.Tools.create(tool)
  }

  getAll(): Bluebird<ITool> {
    return model.Tools.findAll({
      order: ['title']     
    })
    .then(createTools)
  }

  getById(id: number): Bluebird<ITool>{
    return model.Tools.findOne({
      where: { id },
      order: ['title']   
    })
    .then(createTool)
  }

  update(id: number, tool: any){
    return model.Tools.update(tool, {
      where: { id },
      fields: ['title', 'link', 'description', 'tags'],
      hooks: true,
      individualHooks: true
    })
  }

  delete(id: number){
    return model.Tools.destroy({
      where: { id }
    })
  }

}

export default new Tool()
