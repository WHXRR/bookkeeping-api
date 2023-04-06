const db = require('../db')

// 支出：
exports.parentPayClassificationList = (req, res) => {
  const sql = 'select * from parent_pay_classification order by id'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      data: results,
      status: 1,
      msg: 'success'
    })
  })
}

exports.childPayClassificationList = (req, res) => {
  const sql = 'select * from child_pay_classification where parent_id=?'
  const { parent_id } = req.body
  db.query(sql, parent_id, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      data: results,
      status: 1,
      msg: 'success'
    })
  })
}

exports.addParentPayClassification = (req, res) => {
  const { name } = req.body
  const querySQL = 'select * from parent_pay_classification where name=?'
  const insertSQL = 'insert into parent_pay_classification (name) values (?)'
  db.query(querySQL, name, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) {
      db.query(insertSQL, name, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('error')
        res.cc('success', 1)
      })
    } else {
      return res.cc('有已存在的名字')
    }
  })
}

exports.addChildPayClassification = (req, res) => {
  const { name, parent_id } = req.body
  const querySQL = 'select * from child_pay_classification where name=?'
  const insertSQL = 'insert into child_pay_classification (name, parent_id) values (?,?)'
  db.query(querySQL, name, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) {
      db.query(insertSQL, [name, parent_id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('error')
        res.cc('success', 1)
      })
    } else {
      return res.cc('有已存在的名字')
    }
  })
}

exports.delParentPayClassificationList = (req, res) => {
  const { id } = req.body
  const delSQL = 'delete from parent_pay_classification where id=?'
  db.query(delSQL, id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除失败')
    res.cc('success', 1)
  })
}

exports.delChildPayClassificationList = (req, res) => {
  const { id } = req.body
  const delSQL = 'delete from child_pay_classification where id=?'
  db.query(delSQL, id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除失败')
    res.cc('success', 1)
  })
}

exports.updateParentPayClassificationList = (req, res) => {
  const { id, name } = req.body
  const querySQL = 'select * from parent_pay_classification where id<>? and name=?'
  const updateSQL = 'update parent_pay_classification set ? where id=?'
  db.query(querySQL, [id, name], (err, results) => {
    if (err) return res.cc(err)
    if (results.length) return res.cc('有已存在的名字')
    db.query(updateSQL, [{name}, id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('修改失败')
      res.cc('success', 1)
    })
  })
}

exports.updateChildPayClassificationList = (req, res) => {
  const { id, name } = req.body
  const querySQL = 'select * from child_pay_classification where id<>? and name=?'
  const updateSQL = 'update child_pay_classification set ? where id=?'
  db.query(querySQL, [id, name], (err, results) => {
    if (err) return res.cc(err)
    if (results.length) return res.cc('有已存在的名字')
    db.query(updateSQL, [req.body, id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('修改失败')
      res.cc('success', 1)
    })
  })
}

// 收入：
exports.parentIncomeClassificationList = (req, res) => {
  const sql = 'select * from parent_income_classification order by id'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      data: results,
      status: 1,
      msg: 'success'
    })
  })
}

exports.childIncomeClassificationList = (req, res) => {
  const sql = 'select * from child_income_classification where parent_id=?'
  const { parent_id } = req.body
  db.query(sql, parent_id, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      data: results,
      status: 1,
      msg: 'success'
    })
  })
}

exports.addParentIncomeClassification = (req, res) => {
  const { name } = req.body
  const querySQL = 'select * from parent_income_classification where name=?'
  const insertSQL = 'insert into parent_income_classification (name) values (?)'
  db.query(querySQL, name, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) {
      db.query(insertSQL, name, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('error')
        res.cc('success', 1)
      })
    } else {
      return res.cc('有已存在的名字')
    }
  })
}

exports.addChildIncomeClassification = (req, res) => {
  const { name, parent_id } = req.body
  const querySQL = 'select * from child_income_classification where name=?'
  const insertSQL = 'insert into child_income_classification (name, parent_id) values (?,?)'
  db.query(querySQL, name, (err, results) => {
    if (err) return res.cc(err)
    if (!results.length) {
      db.query(insertSQL, [name, parent_id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('error')
        res.cc('success', 1)
      })
    } else {
      return res.cc('有已存在的名字')
    }
  })
}

exports.delParentIncomeClassificationList = (req, res) => {
  const { id } = req.body
  const delSQL = 'delete from parent_income_classification where id=?'
  db.query(delSQL, id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除失败')
    res.cc('success', 1)
  })
}

exports.delChildIncomeClassificationList = (req, res) => {
  const { id } = req.body
  const delSQL = 'delete from child_income_classification where id=?'
  db.query(delSQL, id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除失败')
    res.cc('success', 1)
  })
}

exports.updateParentIncomeClassificationList = (req, res) => {
  const { id, name } = req.body
  const querySQL = 'select * from parent_income_classification where id<>? and name=?'
  const updateSQL = 'update parent_income_classification set ? where id=?'
  db.query(querySQL, [id, name], (err, results) => {
    if (err) return res.cc(err)
    if (results.length) return res.cc('有已存在的名字')
    db.query(updateSQL, [{name}, id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('修改失败')
      res.cc('success', 1)
    })
  })
}

exports.updateChildIncomeClassificationList = (req, res) => {
  const { id, name } = req.body
  const querySQL = 'select * from child_income_classification where id<>? and name=?'
  const updateSQL = 'update child_income_classification set ? where id=?'
  db.query(querySQL, [id, name], (err, results) => {
    if (err) return res.cc(err)
    if (results.length) return res.cc('有已存在的名字')
    db.query(updateSQL, [req.body, id], (err, results) => {
      if (err) return res.cc(err)
      if (results.affectedRows !== 1) return res.cc('修改失败')
      res.cc('success', 1)
    })
  })
}