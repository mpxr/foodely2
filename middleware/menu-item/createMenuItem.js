var requireOption = require('../common').requireOption
var winston = require('winston')

/**
 * Create new Menu Item
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var MenuItemModel = requireOption(objectrepository, 'menuItemModel')

    return function (req, res, next) {

        if (!req.food) {
            winston.debug("No food found in createMenuItem middleware")
            return next()
        }

        if (!req.body.date) {
            winston.debug("No date found for menu item")
            return next()
        }


        MenuItemModel.findOne({'date': req.body.date}, function (err, menuItem) {
            if (err) {
                winston.error(err)
            }

            if (menuItem) {
                menuItem.foods.push(req.food)
            } else {
                menuItem = new MenuItemModel()
                menuItem.foods = []
                menuItem.foods.push(req.food)
                menuItem.date = req.body.date
            }

            menuItem.save(function (err) {
                if (err)
                    winston.error(err)
                req.menuItem = menuItem
                return next()
            })


        })
    };

};