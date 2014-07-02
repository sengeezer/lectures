/**
 * Created by albertin on 02/07/14.
 */

var Datastore = require('nedb')
    , db = new Datastore({ filename: '../data/datafile', autoload: true });

module.exports = {
    set: function(req, callback) {
        var session = req.session || {};
        session.lastVisit = new Date;
        session.ip = req.ip;
        db.insert(session, callback);
    },
    getById: function(id){
        // return ID
    }
};


