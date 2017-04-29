var requireOption = require('../common').requireOption

/**
 * Get Orders by week
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var OrderItemModel = requireOption(objectrepository, 'orderItemModel')

    return function (req, res, next) {
        OrderItemModel.find({})
            .populate('food')
            .exec(function (err, order) {
                req.tpl = order
                return next()
            })
    };

};