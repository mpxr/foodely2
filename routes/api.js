var path = require('path')
var express = require('express')
var router = express.Router()

const passport = require('../auth/password-init')

router.post('/auth', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}))

module.exports = router