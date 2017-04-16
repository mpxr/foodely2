var requireOption = require('../common').requireOption
var mongoose = require('mongoose')
var winston = require('winston')

/**
 * Find Menu Items by week number
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var MenuItemModel = requireOption(objectrepository, 'menuItemModel')

    return function (req, res, next) {
        var menu = req.menu

        var ids = []

        if(!menu){
            return next()
        }

        menu.menuItem.forEach(function (menuItemId) {
            ids.push(mongoose.Types.ObjectId(menuItemId))
        })

        MenuItemModel.find({
            _id: {
                $in: ids
            }
        })
            .populate('foods')
            .exec(function (err, menuItems) {
                if (err) {
                    winston.error(err)
                }
                req.tpl = menuItems
                return next()
            })
    }

}