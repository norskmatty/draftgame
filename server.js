var express = require('express');
var bodyParser = require('body-parser');
var config = require ('./config');
var User = require ('./src/models/user-model');
var Player = require ('./src/models/player-model');
var http = require ('http');
var socket_io = require ('socket.io');
var mongoose = require ('mongoose');

var app = express();

app.use(express.static('public'));
app.use (bodyParser.json () );

var server = http.Server (app);
var io = socket_io (server);



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


require ('./src/routes/get-players') (app, Player);
require ('./src/routes/update-player') (app, Player);


exports.app = app;
exports.runServer = runServer;

