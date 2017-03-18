var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createFoodMW = require('../middleware/food/createFood')
var findFoodMW = require('../middleware/food/findFood')
var editFoodMW = require('../middleware/food/editFood')
var deleteFoodMW = require('../middleware/food/deleteFood')

var Food = require('../model/Food')

var objectRepository = {
    food: Food
};

/**
 * Find Food by name
 */
router.get('', authMW(objectRepository), findFoodMW(objectRepository))

/**
 * Create a new Food
 */
router.post('', authMW(objectRepository), createFoodMW(objectRepository))

/**
 * Edit Food
 */
router.put('', authMW(objectRepository), editFoodMW(objectRepository))

/**
 * Delete Food
 */
router.delete('', authMW(objectRepository), deleteFoodMW(objectRepository))

module.exports = router