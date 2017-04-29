var requireOption = require('../common').requireOption

/**
 * Edits existing food
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var FoodModel = requireOption(objectrepository, 'foodModel');

    return function (req, res, next) {

        if (req.body === undefined) {
            return res.sendStatus(400)
        }

        var food = req.body

        FoodModel.update({name: food.foodName}, {
            allergens: food.allergens,
            ingredients: food.ingredients,
            price: food.price
        }, function (err, numberEffected, rawResponse) {
            if (err) console.error(err);
            return res.sendStatus(200);
        });

    };

};