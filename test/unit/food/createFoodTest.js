var expect = require('chai').expect
var createFood = require("../../../middleware/food/createFood")

describe("createFood middleware", function () {

    describe('should call next when', function () {

        it('no name and price given', function (done) {

            var doNotCall = false

            var fakeFoodModel = {
                findOne: function (some, cb) {
                    doNotCall = true
                    cb()
                }
            }

            createFood({foodModel: fakeFoodModel})({}, {}, function (err) {
                expect(doNotCall).to.be.eql(false)
                expect(err).to.eql(undefined)
                done()
            })

        })

        it('creates food', function (done) {

            var req = {
                body: {
                    name: "Food1",
                    allergens: "nincs",
                    ingredients: "nincs",
                    price: 1000
                }
            }

            var fakeFoodModel = function () {
            }

            fakeFoodModel.findOne = function (some, cb) {
                cb(undefined)
            }

            fakeFoodModel.prototype.save = function (cb) {
                return cb(undefined)
            }

            createFood({foodModel: fakeFoodModel})(req, {}, function () {
                done()
            })

        })

        it('cannot create food because of error', function (done) {

            var req = {
                body: {
                    name: "Food2",
                    allergens: "",
                    ingredients: "",
                    price: 500
                }
            }

            var fakeFoodModel = function () {
            }
            fakeFoodModel.findOne = function (some, cb) {
                cb(undefined)
            }

            fakeFoodModel.prototype.save = function (cb) {
                return cb({err: "err"})
            }

            createFood({foodModel: fakeFoodModel})(req, {}, function (err) {
                done()
            })


        })

    })

})