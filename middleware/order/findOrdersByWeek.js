var requireOption = require('../common').requireOption

/**
 * Get Orders by week
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var MenuItemModel = requireOption(objectrepository, 'orderItemModel')

    return function (req, res, next) {
        MenuItemModel.find({}, function(err, value){
            req.tpl = value
            return next()
        })
    };

};