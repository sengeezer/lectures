
var http = require('http');
var express = require('express');
var app = express();

http.createServer(app).listen(3000);

var sessionModel = require('models/session');

var cookieOptions = {
    path    : '/'
    ,httpOnly: true
    ,maxAge  : 7 * 24 * 3600 * 1000   // a week for example
};
app.use(express.cookieParser()); // installed dependency
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(setSession);

// routes

// getSession middleware
function getSession(req, res, next) {
    if (!req.cookies.sessionId) return next();

    sessionModel.findById(req.cookies.sessionId, function(err, session) {
        return next();
    });
}

// setSession middleware
function setSession(req, res, next) {
    sessionModel.set(req, function(err, session) {
        if (!req.cookies.sessionId) {
            res.cookie('sessionId', session._id, cookieOptions);
        }
        return next();
    });
}

// DEBUG=hcex ./bin/www