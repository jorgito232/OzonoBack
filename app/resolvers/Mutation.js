const { UserActions, ServiceActions } = require('../actions')

const CreateUser = (_, args) => UserActions.createUser(args)

const UpdateUser = (_, args) => UserActions.updateUser(args)

const DeleteUser = (_, args) => UserActions.deleteUser(args)

const CreateService = (_, args) => ServiceActions.createService(args)

const UpdateService = (_, args) => ServiceActions.updateService(args)

const DeleteService = (_, args) => ServiceActions.deleteService(args)

module.exports = {
  CreateUser,
  UpdateUser,
  DeleteUser,
  CreateService,
  UpdateService,
  DeleteService
}
