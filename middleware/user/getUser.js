/**
 * Load a user (if exists) with the :userid param
 * @param objectrepository
 * @returns {Function}
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};