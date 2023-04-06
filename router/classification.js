const express = require('express')
const router = express.Router()

const expressJOI = require('@escook/express-joi')
const { add_parent_icon, add_child_icon, del_icon, update_parent_icon, update_child_icon } = require('../schema/classification')

const classificationHandler = require('../router_handler/classification')
// 支出：父级分类列表
router.post('/parent_pay_classification_list', classificationHandler.parentPayClassificationList)
// 支出：添加父级分类
router.post('/add_parent_pay_classification', expressJOI(add_parent_icon), classificationHandler.addParentPayClassification)
// 支出：删除父级分类
router.post('/del_parent_pay_classification', expressJOI(del_icon), classificationHandler.delParentPayClassificationList)
// 支出：修改父级分类
router.post('/update_parent_pay_classification', expressJOI(update_parent_icon), classificationHandler.updateParentPayClassificationList)
// 支出：子级分类列表
router.post('/child_pay_classification_list', classificationHandler.childPayClassificationList)
// 支出：添加子级分类
router.post('/add_child_pay_classification', expressJOI(add_child_icon), classificationHandler.addChildPayClassification)
// 支出：删除子级分类
router.post('/del_child_pay_classification', expressJOI(del_icon), classificationHandler.delChildPayClassificationList)
// 支出：修改子级分类
router.post('/update_child_pay_classification', expressJOI(update_child_icon), classificationHandler.updateChildPayClassificationList)

// 收入：父级分类列表
router.post('/parent_income_classification_list', classificationHandler.parentIncomeClassificationList)
// 收入：添加父级分类
router.post('/add_parent_income_classification', expressJOI(add_parent_icon), classificationHandler.addParentIncomeClassification)
// 收入：删除父级分类
router.post('/del_parent_income_classification', expressJOI(del_icon), classificationHandler.delParentIncomeClassificationList)
// 收入：修改父级分类
router.post('/update_parent_income_classification', expressJOI(update_parent_icon), classificationHandler.updateParentIncomeClassificationList)
// 收入：子级分类列表
router.post('/child_income_classification_list', classificationHandler.childIncomeClassificationList)
// 收入：添加子级分类
router.post('/add_child_income_classification', expressJOI(add_child_icon), classificationHandler.addChildIncomeClassification)
// 收入：删除子级分类
router.post('/del_child_income_classification', expressJOI(del_icon), classificationHandler.delChildIncomeClassificationList)
// 收入：修改子级分类
router.post('/update_child_income_classification', expressJOI(update_child_icon), classificationHandler.updateChildIncomeClassificationList)

module.exports = router