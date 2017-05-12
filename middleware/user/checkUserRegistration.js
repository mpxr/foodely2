var requireOption = require('../common').requireOption

/**
 * Check if the email address is already registered, if not
 * create the user (no extra checks on password)
 * @param objectrepository
 * @returns {Function}
 */
    module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel')

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.username === 'undefined') || (typeof req.body.password === 'undefined')) {
            return next()
        }

        UserModel.findOne({
            email: req.body.email
        }, function (err, result) {
            if ((err) || (result !== null)) {
                req.tpl ='Your email address is already registered!'
                return next()
            }
            if (req.body.username.length < 3) {
                req.tpl = 'The username should be at least 3 characters!'
                return next()
            }
            //create user
            var newUser = new UserModel()
            newUser.username = req.body.username
            newUser.email = req.body.email
            newUser.password = req.body.password
            newUser.fullName = req.body.fullName
            newUser.address = req.body.address
            newUser.phone = req.body.phone
            newUser.save(function (err) {
                return res.redirect('/login')
            });
        })
    };

};