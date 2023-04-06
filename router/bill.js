const express = require('express')
const router = express.Router()

const expressJOI = require('@escook/express-joi')
const { add_bill, del_bill, edit_bill } = require('../schema/bill')

const billHandler = require('../router_handler/bill')

// 账单列表
router.post('/bill_list', billHandler.billList)
// 添加账单
router.post('/add_bill', expressJOI(add_bill), billHandler.addBill)
// 修改账单
router.post('/update_bill', expressJOI(edit_bill), billHandler.updateBill)
// 删除账单
router.post('/del_bill', expressJOI(del_bill), billHandler.delBill)
// 收藏账单列表
router.post('/favorite/bill_list', billHandler.favoriteBillList)

module.exports = router