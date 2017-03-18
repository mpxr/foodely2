var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
require('dotenv').config()

passport.use(new LocalStrategy(
    function (username, password, done) {
        if(username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD){
            var user = {}
            user.username = username
            user.password = password
            user.id = 1
            return done(null, user)
        } else {
            return done(null, false, {message: 'Incorrent username or password.'})
        }
    }
))

passport.serializeUser(function(user, done){
    done(null, 1)
})

passport.deserializeUser(function(id, done){
    if(id == 1){
        var user = {}
        user.username = process.env.ADMIN_USERNAME
        user.password = process.env.ADMIN_PASSWORD
        user.id = 1
        done(null, user)
    }
})

module.exports = passport