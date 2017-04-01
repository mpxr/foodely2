var MenuItem = require('../../model/MenuItem')
var Menu = require('../../model/Menu')
var Food = require('../../model/Food')
var moment = require('moment');

module.exports = {

    findByWeek: function (week) {

        var food1, food2, food3, food4, food5, food6, food7, food8, food9, food10
        var mondayMenuItem, tusedayMenuItem, wednesdayMenuItem, thursdayMenuItem, fridayMenuItem
        var menu

        var weekNumber;
        if (week === undefined) {
            weekNumber = moment().week();
        } else{
            weekNumber = week
        }

        food1 = Object.create(Food)
        food1.name = "Milánói sertésborda"
        food1.allergens = ["glutén", "tejcukor", "tojás", "fehérje"]
        food1.ingredients = ["liszt", "tojas"]
        food1.price = 1560

        food2 = Object.create(Food)
        food2.name = "Bécsiszelet szűzből, hasábburgonyával és citrom cikkel"
        food2.allergens = ["glutén"]
        food2.ingredients = ["liszt"]
        food2.price = 1800


        food3 = Object.create(Food)
        food3.name = "Mátrai borzas sertésborda tejföllel, reszelt sajttal jázminrizzsel"
        food3.allergens = ["glutén", "tojás"]
        food3.ingredients = ["liszt"]
        food3.price = 1950

        food4 = Object.create(Food)
        food4.name = "Párolt szarvascomb burgundi mártásban, burgonyafánkkal"
        food4.allergens = ["glutén"]
        food4.ingredients = ["liszt"]
        food4.price = 1790

        food5 = Object.create(Food)
        food5.name = "Fish and chips"
        food5.allergens = ["glutén"]
        food5.ingredients = ["liszt"]
        food5.price = 1850

        food5 = Object.create(Food)
        food5.name = "Lasagne"
        food5.allergens = ["glutén", "tojás"]
        food5.ingredients = ["liszt"]
        food5.price = 1500

        food6 = Object.create(Food)
        food6.name = "Túrós csusza"
        food6.allergens = ["glutén"]
        food6.ingredients = ["liszt"]
        food6.price = 1190

        food7 = Object.create(Food)
        food7.name = "Csőben sült zöldségek"
        food7.allergens = ["glutén"]
        food7.ingredients = ["liszt"]
        food7.price = 990

        food8 = Object.create(Food)
        food8.name = "Rántott sajt tartármártással és jázmin rizzsel"
        food8.allergens = ["glutén"]
        food8.ingredients = ["liszt"]
        food8.price = 1200

        food9 = Object.create(Food)
        food9.name = "Rántott csirkemell burgonyapürével"
        food9.allergens = ["glutén"]
        food9.ingredients = ["liszt"]
        food9.price = 1780

        food10 = Object.create(Food)
        food10.name = "Rántott csirkemell burgonyapürével"
        food10.allergens = ["glutén"]
        food10.ingredients = ["liszt"]
        food10.price = 1650

        mondayMenuItem = Object.create(MenuItem)
        mondayMenuItem.date = moment().weeks(weekNumber).weekday(0)
        mondayMenuItem.foods = []
        mondayMenuItem.foods.push(food1)
        mondayMenuItem.foods.push(food2)

        tusedayMenuItem = Object.create(MenuItem)
        tusedayMenuItem.date = moment().weeks(weekNumber).weekday(1)
        tusedayMenuItem.foods = []
        tusedayMenuItem.foods.push(food3)
        tusedayMenuItem.foods.push(food4)

        wednesdayMenuItem = Object.create(MenuItem)
        wednesdayMenuItem.date = moment().weeks(weekNumber).weekday(2)
        wednesdayMenuItem.foods = []
        wednesdayMenuItem.foods.push(food5)
        wednesdayMenuItem.foods.push(food6)

        thursdayMenuItem = Object.create(MenuItem)
        thursdayMenuItem.date = moment().weeks(weekNumber).weekday(3)
        thursdayMenuItem.foods = []
        thursdayMenuItem.foods.push(food7)
        thursdayMenuItem.foods.push(food8)

        fridayMenuItem = Object.create(MenuItem)
        fridayMenuItem.date = moment().weeks(weekNumber).weekday(4)
        fridayMenuItem.foods = []
        fridayMenuItem.foods.push(food9)
        fridayMenuItem.foods.push(food10)

        menu = Object.create(Menu)
        menu.week = weekNumber
        menu.menuItem = []
        menu.menuItem.push(mondayMenuItem)
        menu.menuItem.push(tusedayMenuItem)
        menu.menuItem.push(wednesdayMenuItem)
        menu.menuItem.push(thursdayMenuItem)
        menu.menuItem.push(fridayMenuItem)


        return menu

    }

}
