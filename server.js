var express = require('express');
var bodyParser = require('body-parser');
var config = require ('./config');
var Draftorder = require('./src/models/draft-order');
var Users = require ('./src/models/user-model');
var Player = require ('./src/models/player-model');
var cookieParser = require ('cookie-parser');
var http = require ('http');
var socket_io = require ('socket.io');
var mongoose = require ('mongoose');
var bcrypt = require ('bcryptjs');
var passport = require ('passport');
var session = require ('express-session');

var app = express();

app.use(express.static('public'));
app.use (bodyParser.json () );
app.use (cookieParser ('secret') );
app.use (session ({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
//  store: mongoStore
    })
);


var server = http.Server (app);
var io = socket_io (server);

var strategy = require ('./src/local-strategy');  //localstrategy for login module

passport.use (strategy);
app.use (passport.initialize());
app.use (passport.session());




// SERVER
var runServer = function (callback) {
    mongoose.connect (config.DATABASE_URL, function (err) {
        if (err && callback) {
            return callback (err);
        }
        
        server.listen (config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback ();
            }
        });
    });

};


if (require.main === module) {
    runServer (function (err){
        if (err) {
            console.error (err);
        }
    });
}

//PASSPORT SESSION SERIALIZE

passport.serializeUser (function (user, done) {
    done (null, user.id);
});

passport.deserializeUser (function (id, done) {
    Users.findById (id, function (err, user) {
        done (err, user);
    });
});

require ('./src/routes/login') (app, passport);  //existing user login module
require ('./src/routes/logout-user') (app);  //logout currently logged in user
require ('./src/routes/new-user') (app, passport, Users, bcrypt);  //new user creation module
require ('./src/routes/delete-user') (app, Users);  //delete a user from the database
require ('./src/routes/get-players') (app, Player);  //print out a list of players to the console
require ('./src/routes/update-player') (app, Player, Draftorder);  //updates a player
require ('./src/routes/list-players') (app, Player);  //lists players on screen
require ('./src/routes/list-draft') (app, Draftorder); //lists draft order
require ('./src/routes/delete-players') (app, Player); //deletes all players from Player
require ('./src/routes/delete-draft') (app, Draftorder); //deletes all draft order from Draft
require ('./src/routes/list-qbs') (app, Player); //list QBs
require ('./src/routes/list-rbs') (app, Player); //list RBs
require ('./src/routes/list-wrs') (app, Player); //list WRs
require ('./src/routes/list-tes') (app, Player); //list TEs
require ('./src/routes/list-ots') (app, Player); //list OTs
require ('./src/routes/list-ogs') (app, Player); //list OGs
require ('./src/routes/list-ocs') (app, Player); //list OCs
require ('./src/routes/list-des') (app, Player); //list DEs
require ('./src/routes/list-dts') (app, Player); //list DTs
require ('./src/routes/list-olbs') (app, Player); //list OLBs
require ('./src/routes/list-ilbs') (app, Player); //list ILBs
require ('./src/routes/list-cbs') (app, Player); //list CBs
require ('./src/routes/list-safs') (app, Player); //list S
require ('./src/routes/list-ks') (app, Player); //list K
require ('./src/routes/list-ps') (app, Player); //list P
require ('./src/routes/list-draftr1') (app, Draftorder); //list round 1
require ('./src/routes/list-draftr2') (app, Draftorder); //list round 2
require ('./src/routes/list-draftr3') (app, Draftorder); //list round 3
require ('./src/routes/list-draftr4') (app, Draftorder); //list round 4
require ('./src/routes/list-draftr5') (app, Draftorder); //list round 5
require ('./src/routes/list-draftr6') (app, Draftorder); //list round 6
require ('./src/routes/list-draftr7') (app, Draftorder); //list round 7
require ('./src/routes/get-users') (app, Users);  //gets a list of users printed to the console 
require ('./src/routes/team-choose') (app, Users, passport); //team choice

io.on ('connection', function (socket) {
    
    console.log ('logged in');
    
    socket.on ('choose-bills', function() {
        console.log(session.passport.user);
    });
});

exports.app = app;
exports.runServer = runServer;

