var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')

router.get('/', authMW(), function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', '/admin.html'))
})

module.exports = router