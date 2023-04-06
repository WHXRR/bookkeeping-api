const joi = require('joi')

const name = joi.string().min(1).max(12).required()
const parent_id = joi.number().required()
const id = joi.number().required()

exports.add_parent_icon = {
  body: {
    name,
  }
}

exports.add_child_icon = {
  body: {
    name,
    parent_id
  }
}

exports.del_icon = {
  body: {
    id,
  }
}

exports.update_parent_icon = {
  body: {
    id,
    name,
  }
}
exports.update_child_icon = {
  body: {
    id,
    name,
    parent_id
  }
}