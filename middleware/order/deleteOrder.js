var requireOption = require('../common').requireOption

/**
 * Delete Order
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var OrderItemModel = requireOption(objectrepository, 'orderItemModel')

    return function (req, res, next) {

        var orderToDelete = JSON.parse(req.body.orderToDelete);

        var foodName = orderToDelete.foodName;
        var date = orderToDelete.date;

        OrderItemModel.findOne({'date': date})
            .populate({
                path: 'food',
                'name': foodName
            })
            .exec(function (err, order) {
                order.remove(function (err) {
                    if (err) {
                        console.error(err)
                        return res.sendStatus(400)
                    }
                    return res.sendStatus(200)
                })
            })

    };

};