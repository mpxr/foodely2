var path = require('path')
var express = require('express')
var router = express.Router()

var checkUserLoginMW = require('../middleware/user/checkUserLogin')
var renderMW = require("../middleware/common/renderMW")

var User = require('../model/User')

var objectRepository = {
    userModel: User
};

router.get('/', renderMW("login"))

router.post('/', checkUserLoginMW(objectRepository), renderMW("login"))

module.exports = router