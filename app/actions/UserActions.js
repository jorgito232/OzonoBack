const User = require('../models/User')

//Query
const getUsers = () => User.find().select("-password")

const getOneUser = (id) => User.findOne({_id: id}).select("-password").then((user) => user)

//Mutation

const createUser = (data) => User.create(data).then(() => true).catch(() => false)

const updateUser = (data) => User.findOneAndUpdate({_id: data._id}, {$set: data}, {new: true}).then(() => true).catch(() => false)

const deleteUser = (id) => User.deleteOne({_id: id}).then(() => true).catch(() => false)

//Utils

const getUserByEmail = (email) => User.findOne({email: email})

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
}