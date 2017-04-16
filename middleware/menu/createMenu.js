var moment = require('moment')
var requireOption = require('../common').requireOption
var winston = require('winston')

/**
 * Create new Menu
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var MenuModel = requireOption(objectrepository, 'menuModel');

    return function (req, res, next) {

        var weekNumber = moment(req.body.date, ["MM/DD/YYYY", "YYYY/MM/DD"]).week()

        MenuModel.findOne({'weekNumber': weekNumber}, function (err, menu) {
            if (err) {
                winston.error(err)
            }

            if(menu){
                menu.menuItem.push(req.menuItem)
            } else {
                menu = new MenuModel()
                menu.menuItem = req.menuItem
                menu.weekNumber = weekNumber
            }

            menu.save(function (err) {
                if (err) {
                    winston.error(err)
                }
                return res.redirect('/admin')
            })
        })
    }

}