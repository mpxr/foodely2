var expect = require('chai').expect
var checkUserRegistration = require("../../../middleware/user/checkUserRegistration")

describe("checkUserRegistration middleware", function(){
    describe('should call next when', function () {
        it('no post parameter is given', function (done) {

            var doNotCall = false

            var fakeUserModel = {
                findOne: function (some, cb) {
                    doNotCall = true
                    cb()
                }
            }

            checkUserRegistration({userModel: fakeUserModel})({}, {}, function (err) {
                expect(doNotCall).to.be.eql(false)
                expect(err).to.eql(undefined)
                done()
            })

        })

        it('email address is already registered', function (done) {

            var fakeUserModel = {
                findOne: function (some, cb) {
                    return cb({}, null)
                }
            }

            var req = {
                body: {
                    username: 'ab',
                    email: "user1@gmail.hu",
                    password: "abc",
                    fullName: "User 1 Test",
                    address: "Rather not",
                    phone: "1234567"
                },
                tpl: ''
            }

            checkUserRegistration({userModel: fakeUserModel})(req, {}, function () {
                expect(req.tpl.length).to.be.above(0)
                done()
            })

        })

        it('username should be at least 3 characters', function(done){


            var req = {
                body: {
                    username: 'ab',
                    email: "user1@gmail.hu",
                    password: "abc",
                    fullName: "User 1 Test",
                    address: "Rather not",
                    phone: "1234567"
                },
                tpl: ''
            }


            var fakeUserModel = function () {
            }

            fakeUserModel.findOne = function (some, cb) {
                return cb(undefined, null)
            }

            checkUserRegistration({userModel: fakeUserModel})(req, {}, function () {
                expect(req.tpl.length).to.be.above(0)
                done()
            })

        })

    })

    describe('should render page when', function(){

        it('register is successful', function(done){



            var fakeUserModel = function () {
            }


            fakeUserModel.findOne = function (some, cb) {
                return cb(undefined, null)
            }

            fakeUserModel.prototype.save = function (cb) {
                return cb(undefined)
            }

            var req = {
                body: {
                    username: "user 1",
                    email: "user1@gmail.hu",
                    password: "abc",
                    fullName: "User 1 Test",
                    address: "Rather not",
                    phone: "1234567"
                }
            }

            var res = {
                redirect: function (to) {
                    expect(to).to.eql('/login')
                    done()
                }
            }

            checkUserRegistration({userModel: fakeUserModel})(req, res, function (err) {
                expect(doCall).to.be.eql(true)
                expect(err).to.eql(undefined)
                done()
            })

        })

    })

    describe('requireOption', function(){
        describe('should throw error when', function(){
            it('invalid property Name', function () {

                expect(checkUserRegistration.bind(checkUserRegistration)).to.throw(TypeError)

            })
        })
    })

})
