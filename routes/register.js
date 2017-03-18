var path = require('path')
var express = require('express')
var router = express.Router()

var createUserMW= require('../middleware/user/checkUserRegistration')

var User = require('../model/User')

var objectRepository = {
    user: User
};

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', '/register.html'))
})

/**
 * Create new User
 */
router.post('', createUserMW(objectRepository))

module.exports = router