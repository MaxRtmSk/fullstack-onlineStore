const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
  async create(req, res, next){
    try{
      const {name} = req.body
      const type = await Type.create({name})
      return res.json(type)
    }catch(e){
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res){
    const types = await Type.findAll()
    return res.json(types)
  }

  async delete(req, res){
    const {id} = req.body
    const types = await Type.destroy({where: { id: id }})
    return res.json(`delete ${types}`)
  }

}

module.exports = new TypeController()