const Service = require('../models/Service')

//Query

const getServices = () => Service.find()

const getService = (args) => Service.find(args)

//Mutation

const createService = (data) => Service.create(data).select("-password")

const updateService = (id, data) => Service.findOneAndUpdate({id: id}, data, {new: true}).select("-password")

const deleteService = (id) => Service.deleteOne({id: id}).select("-password")

module.exports = {
  getServices,
  getService,
  createService,
  updateService,
  deleteService
}