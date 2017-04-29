var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var renderMW = require("../middleware/common/renderMW")

router.get('/', authMW(), renderMW("admin"))

module.exports = router