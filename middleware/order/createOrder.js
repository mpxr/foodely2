var requireOption = require('../common').requireOption

/**
 * Create new Order
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var OrderItemModel = requireOption(objectrepository, 'orderItemModel');
    var FoodModel = requireOption(objectrepository, 'foodModel');

    return function (req, res, next) {

        if (typeof req.body.food === 'undefined') {
            return next();
        }

        var promises = req.body.food.map(function (foodObj) {
            return new Promise(function (resolve, reject) {

                var food = JSON.parse(foodObj);

                FoodModel.findOne({name: food.foodName}, function (err, foundFood) {
                    var orderItem = new OrderItemModel()
                    orderItem.date = food.date;
                    orderItem.food = foundFood;
                    orderItem.save(function (err) {
                        if (err) console.error(err);
                        resolve();
                    })
                })
            })
        })

        Promise.all(promises)
            .then(function () {
                return res.sendStatus(200);
            })
            .catch(function (err) {
                console.error(err);
                return res.sendStatus(400);
            });
    };

};