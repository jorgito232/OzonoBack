const { UserActions, ServiceActions } = require('../actions')

const CreateUser = (_, args) => UserActions.createUser(args.data)

const UpdateUser = (_, args) => UserActions.updateUser(args.data.id, args.data)

const DeleteUser = (_, id) => UserActions.deleteUser(id)

const CreateService = (_, args) => ServiceActions.createService(args.data)

const UpdateService = (_, args) => ServiceActions.updateService(args.data)

const DeleteService = (_, id) => ServiceActions.deleteService(id)

module.exports = {
  CreateUser,
  UpdateUser,
  DeleteUser,
  CreateService,
  UpdateService,
  DeleteService
}
