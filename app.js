const express = require('express')
const cors = require('cors')
const joi = require('joi')
const { expressjwt: jwt } = require('express-jwt')
const { jwtSecretKey } = require('./config')
const bodyParser = require('body-parser')

const app = express()
app.listen(80, () => {
  console.log('success~');
})

// 跨域处理
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.cc = (err, status = 0) => {
    res.send({
      status,
      msg: err instanceof Error ? err.message : err
    })
  }
  next()
})

// token处理
app.use(jwt({ secret: jwtSecretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))

// 路由
const classificationRouter = require('./router/classification')
const billRouter = require('./router/bill')
const userRouter = require('./router/user')
app.use('/api', classificationRouter)
app.use('/api', userRouter)
app.use('/api', billRouter)

app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) return res.cc(err)
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
  res.cc(err)
})
