var MockOrder = require('../mock/MockOrder')

/**
 * Get Orders by week
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        var week = req.query.week;
        req.tpl = MockOrder.findByWeek(week)
        next()
    };

};