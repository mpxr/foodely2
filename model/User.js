var db = require('../config/db');

var User = db.model('User', {
    username: String,
    password: String,
    fullName: String,
    email: String,
    address: String,
    phone: String
})

module.exports = User