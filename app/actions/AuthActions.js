const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { getUserByEmail } = require('./UserActions')

const SECRET_KEY = process.env.SECRET_KEY

Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

const exp = new Date().addDays(1).getTime()

const createToken = (data) => {
  const payload = {
    data,
    exp
  };

  return jwt.sign(payload, SECRET_KEY)
}

const login = ({ email, password }) => {
  return new Promise((reject, resolve) => {
    const user = getUserByEmail(email)
    bcrypt.compare(password, user.password, (err, isValid) => {
      if (err) reject(err)
      isValid ? resolve(createToken(user)) : reject(new Error('User or password invalid'))
    })
  })
}

module.exports = {
  login
}