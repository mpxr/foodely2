var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createFoodMW = require('../middleware/food/createFood')
var editFoodMW = require('../middleware/food/editFood')
var deleteFoodMW = require('../middleware/food/deleteFood')
var createMenuItemMW = require('../middleware/menu-item/createMenuItem')
var createMenuMW = require('../middleware/menu/createMenu')

var renderMW = require("../middleware/common/renderMW")

var MenuItem = require('../model/MenuItem')
var FoodModel = require('../model/Food')
var MenuModel = require('../model/Menu')

var objectRepository = {
    menuItemModel: MenuItem,
    foodModel: FoodModel,
    menuModel: MenuModel
};

/**
 * Find Food by name
 */
//router.get('/', authMW(objectRepository))

/**
 * Create a new Food
 */
router.post('/', authMW(objectRepository), createFoodMW(objectRepository), createMenuItemMW(objectRepository), createMenuMW(objectRepository))

/**
 * Edit Food
 */
//router.put('', authMW(objectRepository), editFoodMW(objectRepository))

/**
 * Delete Food
 */
//router.delete('', authMW(objectRepository), deleteFoodMW(objectRepository))

module.exports = router