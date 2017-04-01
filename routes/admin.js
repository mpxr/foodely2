var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')

router.get('/', authMW(), function (req, res) {
    res.render("admin")
})

module.exports = router