/**
 * Create new Menu Item
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log(req.query.week)
        return next();
    };

};