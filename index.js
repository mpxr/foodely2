var express = require('express')
var app = express()

var session = require("express-session")
var bodyParser = require("body-parser")

app.use(express.static('public'))

app.set("view engine", "ejs")

app.use(session({
    secret: "dirty little secret of mine",
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}))

// for parsing application/json
app.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(function (req, res, next) {
    res.tpl = {},
        res.tpl.error = []

    return next()
})

require('./routes/home')(app)
require('./routes/menu')(app)
require('./routes/order')(app)
require('./routes/register')(app)
require('./routes/login')(app)
require('./routes/admin')(app)

app.use(function (err, req, res, next) {
    res.status(500).send("Oh boi, something bad happened...")

    console.error(err.stack)
})

var server = app.listen(3000, function(){
    console.log("Hello from /3000")
})
