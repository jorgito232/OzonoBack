const { UserActions, ServiceActions, AuthActions } = require('../actions')

const Users = (_, data) => UserActions.getUsers(data)
const User = (_, id) => UserActions.getOneUser(id)

const Services = (_, data) => ServiceActions.getServices(data)
const Service = (_, id) => ServiceActions.getOneService(id)

const Login = (_, args) => AuthActions.login(args).then(((token) => {return token})).catch((err) => err)

module.exports = {
  Users,
  User,
  Services,
  Service,
  Login
}