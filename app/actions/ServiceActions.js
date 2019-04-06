const Service = require('../models/Service')

//Query

const getServices = () => Service.find().populate('user').populate('atendend').select('-password')

const getService = (args) => Service.find(args).populate('user').populate('atendend').select('-password')

const getOneService = (id) => Service.findOne({_id: id}).populate('user').populate('atendend').select('-password')

//Mutation

const createService = (data) => Service.create(data).then(() => true).catch(() => false)

const updateService = (data) => Service.findOneAndUpdate({_id: data._id}, {$set: data}, {new: true}).then(() => true).catch(() => false)

const deleteService = (id) => Service.deleteOne({_id: id}).then(() => true).catch(() => false)

module.exports = {
  getServices,
  getService,
  getOneService,
  createService,
  updateService,
  deleteService
}