var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createMenuItemMW = require('../middleware/menu-item/createMenuItem')
var findMenuItemByWeekMW = require('../middleware/menu-item/findMenuByWeek')
var findMenuItemByDateMW = require('../middleware/menu-item/findMenuItemByDate')
var updateMenuItemMW = require('../middleware/menu-item/updateMenuItem')
var deleteMenuItemMW = require('../middleware/menu-item/deleteMenuItem')
var getCurrentWeekMW = require('../middleware/common/getCurrentWeek')
var renderMW = require("../middleware/common/renderMW")

var MenuItem = require('../model/MenuItem')
var Food = require('../model/Food')

router.get('/', authMW(objectRepository), findMenuItemByDateMW(objectRepository), renderMW("menu"))

var objectRepository = {
    menuItem: MenuItem,
    food: Food
};

/**
 * Create a new Menu Item
 */
router.post('', authMW(objectRepository), createMenuItemMW(objectRepository))

/**
 * Find Menu Items by week number
 */
router.get('/week', authMW(objectRepository),
    getCurrentWeekMW(),
    findMenuItemByWeekMW(objectRepository))

/**
 * Edit Menu Item
 */
router.put('', authMW(objectRepository), updateMenuItemMW(objectRepository))

/**
 * Delete Menu Item
 */
router.delete('', authMW(objectRepository), deleteMenuItemMW(objectRepository))


module.exports = router