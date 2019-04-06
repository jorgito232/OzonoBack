const { UserActions, ServiceActions, AuthActions } = require('../actions')

const Users = (_, data) => UserActions.getUsers(data)
const User = (_, args) => UserActions.getOneUser(args.id)

const Services = (_, data) => ServiceActions.getServices(data)
const Service = (_, args) => ServiceActions.getOneService(args.id)

const Login = (_, args) => AuthActions.login(args).then(((token) => {return token})).catch((err) => err)

module.exports = {
  Users,
  User,
  Services,
  Service,
  Login
}