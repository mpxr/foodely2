var User = require('../../model/Food')
var Food = require('../../model/Food')
var OrderItem = require('../../model/OrderItem')
var moment = require('moment')

module.exports = {

    findByWeek: function (week) {

        var weekNumber;
        if (week === undefined) {
            weekNumber = moment().week();
        } else {
            weekNumber = week
        }

        var food1 = Object.create(Food)
        food1.name = "Milánói sertésborda"
        food1.allergens = ["glutén", "tejcukor", "tojás", "fehérje"]
        food1.ingredients = ["liszt", "tojas"]
        food1.price = 1560

        var food2 = Object.create(Food)
        food2.name = "Bécsiszelet szűzből, hasábburgonyával és citrom cikkel"
        food2.allergens = ["glutén"]
        food2.ingredients = ["liszt"]
        food2.price = 1800

        var user = Object.create(User)
        user.name = "M V"

        var orderItem1 = Object.create(OrderItem)
        orderItem1.food = food1;
        orderItem1.user = user
        orderItem1.date = moment().weeks(weekNumber).weekday(1)

        var orderItem2 = Object.create(OrderItem)
        orderItem2.food = food2;
        orderItem2.user = user
        orderItem2.date = moment().weeks(weekNumber).weekday(2)

        var order = Object.create(Order)
        order.orderItem = []
        order.orderItem.push(orderItem1)
        order.orderItem.push(orderItem2)
        order.weekNumber = weekNumber

        return order

    }

}