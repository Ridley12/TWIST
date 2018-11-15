#! /usr/bin/env node

console.log('This script populates highschool, participant, presenter, room, schedule, session, and topic to your database. Specified database as argument: populatedb mongodb://Wes:locallibrary1986@ds161183.mlab.com:61183/twist-database');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Highschool = require('./models/highschool')
var Particpant = require('./models/participant')
var Presenter = require('./models/presenter')
var Room = require('./models/Room')
var Schedule = require('./models/schedule')
var Session = require('./models/session')
var Topic = require('./models/topic')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var highschool = []
var participant = []
var presenter = []
var room = []
var schedule = []
var session = []
var topic = []

function highschoolCreate() {

}

function participantCreate() {

}

function presenterCreate() {

}

function roomCreate() {

}

function scheduleCreate() {

}

function sessionCreate() {

}

function topicCreate() {

}

async.event([
    
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log();
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});