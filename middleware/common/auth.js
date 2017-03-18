/**
 * Authenticate user by username and password
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};