const db = require('../db')

// 账单列表
exports.billList = (req, res) => {
  const sql = 'select * from bill order by date desc'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    const arr = []
    results.forEach(item => {
      if (arr.find(ele => ele.date === item.date)) {
        const obj = arr.find(ele => ele.date === item.date)
        obj.data.push(item)
      } else {
        arr.push({
          date: item.date,
          data: [item]
        })
      }
    })
    res.send({
      data: arr,
      status: 1,
      msg: 'success'
    })
  })
}

// 删除账单
exports.delBill = (req, res) => {
  const { id } = req.body
  const delSQL = 'delete from bill where id=?'
  db.query(delSQL, id, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('删除失败')
    res.cc('success', 1)
  })
}

// 添加账单
exports.addBill = (req, res) => {
  const insertSQL = 'insert into bill set ?'
  db.query(insertSQL, req.body, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('创建失败')
    res.cc('success', 1)
  })
}

// 修改账单
exports.updateBill = (req, res) => {
  const updateSQL = 'update bill set ? where id=?'
  db.query(updateSQL, [req.body, req.body.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('修改失败')
    res.cc('success', 1)
  })
}

// 收藏列表
exports.favoriteBillList = (req, res) => {
  const sql = 'select * from bill where is_favorite=1 order by create_time'
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      data: results,
      status: 1,
      msg: 'success'
    })
  })
}