const { UserActions, ServiceActions } = require('../actions')

const CreateUser = (_, args) => UserActions.createUser(args.data)

const UpdateUser = (_, args) => UserActions.updateUser(args.data)

const DeleteUser = (_, args) => UserActions.deleteUser(args.id)

const CreateService = (_, args) => ServiceActions.createService(args.data)

const UpdateService = (_, args) => ServiceActions.updateService(args.data)

const DeleteService = (_, args) => ServiceActions.deleteService(args.id)

module.exports = {
  CreateUser,
  UpdateUser,
  DeleteUser,
  CreateService,
  UpdateService,
  DeleteService
}
