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

const createToken = ({name, lastName, email, type}) => {
  const payload = {
    name,
    lastName,
    email,
    type,
    exp
  };

  return jwt.sign(payload, SECRET_KEY)
}

const login = ({email, password}) => {
  return new Promise((reject, resolve) => {
    getUserByEmail(email).then((user) => {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) reject(err)
        isValid ? resolve(createToken(user)) : reject('User or password invalid')
      })
    }).catch(() => {
      reject()
    })    
  })
}

module.exports = {
  login
}