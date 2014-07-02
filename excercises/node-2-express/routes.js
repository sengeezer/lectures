/**
 * Created by albertin on 02/07/14.
 */

var defaultController = require('controllers/default');

module.exports = function(app) {
    app.routes('/:id')
        .get(defaultController.getOne)
        .post(defaultController.createOne)
    ;
};