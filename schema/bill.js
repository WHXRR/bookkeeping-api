const joi = require('joi')

const id = joi.number().required()
const child_id = joi.number().required()
const parent_id = joi.number().required()
const name = joi.string().min(1).max(12).required()
const amount = joi.required()
const date = joi.string().required()
const tips = joi.string().allow('')
const bill_type = joi.number().required()
const is_favorite = joi.number()

exports.del_bill = {
  body: {
    id
  }
}

exports.add_bill = {
  body: {
    name,
    amount,
    date,
    bill_type,
    is_favorite,
    tips,
    child_id,
    parent_id
  }
}

exports.edit_bill = {
  body: {
    id,
    name,
    amount,
    date,
    bill_type,
    is_favorite,
    tips,
    child_id,
    parent_id
  }
}