var requireOption = require('../common').requireOption
var winston = require('winston')

/**
 * Find Menu by week
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var MenuModel = requireOption(objectrepository, 'menuModel');

    return function (req, res, next) {

        var week = req.week

        MenuModel.findOne({
            weekNumber: week
        }, function (err, menuDocs) {
            if (err)
                winston.error(err)
            req.menu = menuDocs
            return next()
        })

    }

}