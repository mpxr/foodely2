var express = require('express')
var router = express.Router()

var renderMW = require("../middleware/common/renderMW")

router.get('/', renderMW("home"))

module.exports = router