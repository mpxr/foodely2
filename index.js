var express = require('express')
var path = require('path')
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var helmet = require('helmet')
var compression = require('compression')
var winston = require('winston')

require('dotenv').config()

var home = require('./routes/home')
var menu = require('./routes/menu')
var food = require('./routes/food')
var order = require('./routes/order')
var register = require('./routes/register')
var login = require('./routes/login')
var admin = require('./routes/admin')
var auth = require('./routes/auth')

var app = express()

app.use(helmet())
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")

app.use(require('body-parser').urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', home)
app.use('/menu', menu)
app.use('/order', order)
app.use('/food', food)
app.use('/register', register)
app.use('/login', login)
app.use('/admin', admin)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

var server = app.listen(3000, function () {
    winston.info("Express server from /3000")
})

module.exports = app