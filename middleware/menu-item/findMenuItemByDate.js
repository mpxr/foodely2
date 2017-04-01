var MockMenuItem = require('../mock/MockMenuItem')

/**
 * Find Menu Item by date
 * @param objectrepository
 * @returns {Function}
 */

module.exports = function (objectRepository) {

    return function (req, res, next) {
        var week = req.query.week;
        req.tpl = MockMenuItem.findByWeek(week)
        next()
    };

};