var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createMenuItemMW = require('../middleware/menu-item/createMenuItem')
var findMenuItemMW = require('../middleware/menu-item/findMenuItem')
var getCurrentWeekMW = require('../middleware/common/getCurrentWeek')
var renderMW = require("../middleware/common/renderMW")
var findMenuMW = require('../middleware/menu/findMenu')

var MenuItem = require('../model/MenuItem')
var Menu = require('../model/Menu')
var Food = require('../model/Food')

var objectRepository = {
    menuItemModel: MenuItem,
    foodModel: Food,
    menuModel: Menu
};

router.get('/', authMW(), getCurrentWeekMW(), findMenuMW(objectRepository),
    findMenuItemMW(objectRepository), renderMW("menu"))

/**
 * Create a new Menu Item
 */
router.post('', authMW(), createMenuItemMW(objectRepository))



module.exports = router