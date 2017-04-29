var requireOption = require('../common').requireOption

/**
 * This middleware loads the user from model and checks the credentials,
 * if they are ok, set session values and redirect to /
 * if they are wrong, set error message
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel')

    return function (req, res, next) {


        if ((typeof req.body === 'undefined') || (typeof req.body.username === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }


        //lets find the user
        UserModel.findOne({
            username: req.body.username
        }, function (err, result) {
            if ((err) || (!result)) {
                req.tpl = 'Your username is not registered!';
                return next();
            }

            //check password
            if (result.password !== req.body.password) {
                req.tpl = 'Wrong password!';
                return next();
            }

            //login is ok, save id to session
            req.session.userid = result._id;

            //redirect to / so the app can decide where to go next
            return res.redirect('/menu');
        });

    };

};