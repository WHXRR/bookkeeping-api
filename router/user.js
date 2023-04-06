const express = require('express')
const router = express.Router()

const expressJOI = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/user')

const userHandler = require('../router_handler/user')
// 注册
router.post('/register',expressJOI(reg_login_schema), userHandler.register)
// 登录
router.post('/login',expressJOI(reg_login_schema), userHandler.login)

module.exports = router