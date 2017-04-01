var moment = require('moment');
/**
 * Using the template engine render the values into the template
 */
module.exports = function (viewName) {

    moment.locale("hu")

    return function (req, res) {
        res.render(viewName, {data: req.tpl, moment: moment});
    };

};
