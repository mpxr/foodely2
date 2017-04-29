var requireOption = require('../common').requireOption

/**
 * Find food
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var FoodModel = requireOption(objectrepository, 'foodModel');

    return function (req, res, next) {
        var foodName = req.query.foodName;
        FoodModel.findOne({name: foodName}, function (err, food) {
            if (err) console.error(err)
            return res.send(food);
        })
    };

};