var moment = require('moment')

/**
 * Get the current week number
 * @returns {Function}
 */
module.exports = function () {

    return function (req, res, next) {
        var week = moment().week()
        req.week = week
        return next()
    };

};