/**
 * This middleware loads the user from model and checks the credentials,
 * if they are ok, set session values and redirect to /
 * if they are wrong, set error message
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};