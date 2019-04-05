const User = require('../models/User')

//Query
const getUsers = () => User.find().select("-password")

const getUser = (args) => User.find(args).select("-password")

const getOneUser = (id) => User.findOne({id: id}).select("-password")

//Mutation

const createUser = (data) => User.create(data).then(() => true).catch(() => false)

const updateUser = (data) => User.findOneAndUpdate({id: data.id}, {$set: data}, {new: true}).then(() => true).catch(() => false)

const deleteUser = (id) => User.deleteOne({id: id}).then(() => true).catch(() => false)

//Utils

const getUserByEmail = (email) => User.findOne({email: email})

module.exports = {
  getUsers,
  getUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
}