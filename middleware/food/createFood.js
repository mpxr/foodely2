/**
 * Create new food and saves it
 * @param objectrepository
 * @returns {Function}
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log('Create food')
        return next();
    };

};