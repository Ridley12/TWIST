#! /usr/bin/env node

console.log('This script populates highschools, sessions, presenters, schedules, topics, participants, and rooms to your database. Specified database as argument: populatedb mongodb://Wes:locallibrary1986@ds161183.mlab.com:61183/twist-database');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return}

var async = require('async')
var HighSchool = require('./models/highschool/')
var Session = require('./models/session/')
var Presenter = require('./models/presenter/')
var Schedule = require('./models/schedule/')
var Topic = require('./models/topic/')
var Participant = require('./models/participant/')
var Room = require('./models/room/')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var highschools = []
var sessions = []
var presenters = []
var schedules = []
var topics = []
var participants = []
var rooms = []

function highschoolCreate(high_school_id, name) {
  
}

function sessionCreate(session_number, time) {
  
}

function presenterCreate(presenter_id, family_name, first_name, occupation, main_phone, mobile_phone, email) {
  
}

function scheduleCreate(session_number, room_number, topic_code, presenter_id) {
  
}

function topicsCreate(topic_code, title, description) {

}

function participantsCreate(participant_id, family_name, first_name, address, email, time_stamp, participant_type) {

}

function roomsCreate(room_number, building, capacity) {

}