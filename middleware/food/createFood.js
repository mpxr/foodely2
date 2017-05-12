var requireOption = require('../common').requireOption
var winston = require('winston')

/**
 * Create new food and saves it
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var FoodModel = requireOption(objectrepository, 'foodModel');

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body === 'undefined') || (req.body.name === '') ||  (req.body.price === '')) {
            return next()
        }

        var foodModel = new FoodModel()
        foodModel.name = req.body.name
        foodModel.allergens = req.body.allergens
        foodModel.ingredients = req.body.ingredients
        foodModel.price = req.body.price
        foodModel.save(function(err){
            if(err){
                winston.error(err)
            }
            req.food = foodModel
            return next()
        })
    };

};