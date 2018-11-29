#! /usr/bin/env node

console.log('This script populates participant schedule, presenters, rooms, sessions, session schedule, and topics to your database. Specified database as argument: populatedb mongodb://Wes:locallibrary1986@ds161183.mlab.com:61183/twist-database');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return}

var async = require('async')
var ParticpantSchedule = require('./models/participantschedule')
var Presenter = require('./models/presenters')
var Room = require('./models/rooms')
var Session = require('./models/sessions')
var Topic = require('./models/topics')
var SessionSchedule = require('./models/sessionschedule')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var participantSchedule = []
var presenters = []
var rooms = []
var sessions = []
var topics = []
var sessionSchedule = []

function participantScheduleCreate() {

}

function presentersCreate() {

}

function roomsCreate() {

}

function sessionScheduleCreate() {

}

function sessionsCreate() {

}

function topicsCreate() {

}

async.event([
    
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);}
    else {
        console.log();}
    // All done, disconnect from database
    mongoose.connection.close();});