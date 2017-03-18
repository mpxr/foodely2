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

var MenuItem = require('../model/MenuItem')
var Food = require('../model/Food')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', '/menu.html'))
})

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
 * Find Menu Items by date
 */
router.get('/date', authMW(objectRepository), findMenuItemByDateMW(objectRepository))

/**
 * Edit Menu Item
 */
router.put('', authMW(objectRepository), updateMenuItemMW(objectRepository))

/**
 * Delete Menu Item
 */
router.delete('', authMW(objectRepository), deleteMenuItemMW(objectRepository))


module.exports = router