/**
 * Authenticate user by username and password
 * @returns {Function}
 */
module.exports = function () {

    return function (req, res, next) {
        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/');
        }
        return next();
    };

};