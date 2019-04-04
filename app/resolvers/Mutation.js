const { UserActions, ServiceActions } = require('../actions')

const CreateUser = (_, data) => UserActions.createUser(data)

const UpdateUser = (_, data) => UserActions.updateUser(data.id, data)

const DeleteUser = (_, id) => UserActions.deleteUser(id)

const CreateService = (_, data) => ServiceActions.createService(data)

const UpdateService = (_, data) => ServiceActions.updateService(data)

const DeleteService = (_, id) => ServiceActions.deleteService(id)

module.exports = {
  CreateUser,
  UpdateUser,
  DeleteUser,
  CreateService,
  UpdateService,
  DeleteService
}
