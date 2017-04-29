var requireOption = require('../common').requireOption

/**
 * Deletes food
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    var FoodModel = requireOption(objectrepository, 'foodModel')

    return function (req, res, next) {

        var foodName = req.body.foodName

        if(foodName === undefined){
            return res.sendStatus(400)
        }

        FoodModel.remove(foodName, function(err){
            if(err) console.error(err)
            return res.sendStatus(200)
        })
    };

};