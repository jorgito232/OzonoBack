const Service = require('../models/Service')

//Query

const getServices = () => Service.find().populate('user').populate('atendend').select('-password')

const getService = (args) => Service.find(args).populate('user').populate('atendend').select('-password')

const getOneService = (id) => Service.findOne({id: id}).populate('user').populate('atendend').select('-password')

//Mutation

const createService = (data) => Service.create(data).exec().then(() => true).catch(() => false)

const updateService = (data) => Service.findOneAndUpdate({id: data.id}, {$set: data}, {new: true}).exec().then(() => true).catch(() => false)

const deleteService = (id) => Service.deleteOne({id: id}).exec().then(() => true).catch(() => false)

module.exports = {
  getServices,
  getService,
  getOneService,
  createService,
  updateService,
  deleteService
}