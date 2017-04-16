var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foodely');

module.exports = mongoose;