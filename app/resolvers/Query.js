const { UserActions, ServiceActions, AuthActions } = require('../actions')

const Users = (_, data) => UserActions.getUsers(data)
const User = (_, id) => UserActions.getOneUser(id)

const Services = (_, data) => ServiceActions.getServices(data)
const Service = (_, id) => ServiceActions.getOneService(id)

const Login = (_, { email, password }) => AuthActions.login({ email, password })

module.exports = {
  Users,
  User,
  Services,
  Service,
  Login
}