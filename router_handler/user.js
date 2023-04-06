const db = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecretKey, expiresIn } = require('../config')

exports.register = (req, res) => {
  const userInfo = req.body
  const querySQL = 'select * from users where username=?'
  db.query(querySQL, userInfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (results.length) return res.cc('该用户名已被占用~')
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)
    const insertSQL = 'insert into users set ?'
    db.query(insertSQL, { username: userInfo.username, password: userInfo.password }, (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('注册失败')
      res.cc('success', 1)
    })
  })
}

exports.login = (req, res) => {
  const userInfo = req.body
  const querySQL = 'select * from users where username=?'
  db.query(querySQL, userInfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) return res.cc('未查询到该用户')
    const compareResult = bcrypt.compareSync(userInfo.password, results[0].password)
    if (!compareResult) return res.cc('密码错误')
    const user = { ...results[0], password: '' }
    const token = jwt.sign(user, jwtSecretKey, { expiresIn })
    res.send({
      status: 1,
      msg: 'success',
      data: {
        token: 'Bearer ' + token
      }
    })
  })
}