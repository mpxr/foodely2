var path = require('path')
var express = require('express')
var router = express.Router()

var authMW = require('../middleware/common/auth')
var createOrderMW = require('../middleware/order/createOrder')
var findOrderByDate = require('../middleware/order/findOrderByDate')
var findOrdersByWeekMW = require('../middleware/order/findOrdersByWeek')
var editOrderMW = require('../middleware/order/editOrder')
var deleteOrderMW = require('../middleware/order/deleteOrder')
var getCurrentWeekMW = require('../middleware/common/getCurrentWeek')

var MenuItem = require('../model/MenuItem')
var User = require('../model/User')

var objectRepository = {
    menuItem: MenuItem,
    user: User
};

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/html', '/order.html'))
})

/**
 * Find Order by week number
 */
router.get('/find', authMW(objectRepository),
    getCurrentWeekMW(),
    findOrdersByWeekMW(objectRepository))

/**
 * Find Order by date
 */
router.get('/find', authMW(objectRepository), findOrderByDate(objectRepository))

/**
 * Create a new Order
 */
router.post('', authMW(objectRepository), createOrderMW(objectRepository))

/**
 * Edit Order
 */
router.put('', authMW(objectRepository), editOrderMW(objectRepository))

/**
 * Delete Order
 */
router.delete('', authMW(objectRepository), deleteOrderMW(objectRepository))

module.exports = router