var path = require('path')
var express = require('express')
var router = express.Router()

const passport = require('../auth/passport-init')

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

module.exports = router