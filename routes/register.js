var path = require('path');

module.exports = function (app) {

    app.get('/register', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/html', '/register.html'))
    })

}