var path = require('path')
var express = require('express')
var router = express.Router()

var createUserMW= require('../middleware/user/checkUserRegistration')
var renderMW = require("../middleware/common/renderMW")

var User = require('../model/User')

var objectRepository = {
    userModel: User
};

router.get('/', renderMW("register"))

/**
 * Create new User
 */
router.post('', createUserMW(objectRepository), renderMW("register"))

module.exports = router