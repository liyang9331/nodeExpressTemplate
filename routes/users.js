var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// nodemon 实现热更新  命令：nodemon app.js
/* GET users listing. */
router.get('/', function (req, res) {
  // 创建数据库连接对象
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '123456',
    database: 'test'
  })
  // 开启连接
  connection.connect()
  // 连接命令
  connection.query('SELECT * FROM user_info', function (err, result) {
    if (err) {
      console.log(err)
      connection.end()
    }
    if (result) {
      res.send(result)
      // 关闭连接
      connection.end()
    }
  })
});

module.exports = router;
