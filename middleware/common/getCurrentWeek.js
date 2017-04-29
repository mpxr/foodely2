var moment = require('moment')

/**
 * Get the current week number
 * @returns {Function}
 */
module.exports = function () {

    return function (req, res, next) {
        req.week = moment().week()
        return next()
    };

};