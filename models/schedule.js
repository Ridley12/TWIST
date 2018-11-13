var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema(
  {
    session_number: {type: Number, required: true, max: 100},
    room_number: {type: Number, required: true, max: 100},
    topic_code: {type: String, required: true, max: 100},
    presenter_id: {type: String, required: true, max: 100},});

// Virtual for schedule's session number
ScheduleSchema
.virtual('session_number')
.get(function () {
  return this.session_number;});

// Virtual for schedule's room_number
ScheduleSchema
.virtual('room_number')
.get(function () {
  return this.room_number;});

// Virtual for schedule's topic code
ScheduleSchema
.virtual('topic_code')
.get(function () {
    return this.topic_code;});

// Virtual for schedule's presenter id
ScheduleSchema
.virtual('presenter_id')
.get(function () {
    return this.presenter_id;});

//Export model
module.exports = mongoose.model('Schedule', ScheduleSchema);