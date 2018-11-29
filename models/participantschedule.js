var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParticipantSchema = new Schema(
  {
    participant_id: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    first_name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    time_stamp: {type: String, required: true, max: 100},
    participant_type: {type: String, required: true, max: 100},});

// Virtual for participant's id
ParticipantSchema
.virtual('participant_id')
.get(function () {
  return this.participant_id;});

// Virtual for participant's last name
ParticipantSchema
.virtual('family_name')
.get(function () {
  return this.family_name;});

// Virtual for participant's first name
ParticipantSchema
.virtual('first_name')
.get(function () {
  return this.first_name;});

// Virtual for participant's address
ParticipantSchema
.virtual('address')
.get(function () {
  return this.address;});

// Virtual for participant's email
ParticipantSchema
.virtual('email')
.get(function () {
  return this.email;});

// Virtual for participant's time stamp
ParticipantSchema
.virtual('time_stamp')
.get(function () {
  return this.time_stamp;});

// Virtual for participant's type
ParticipantSchema
.virtual('participant_type')
.get(function () {
  return this.participant_type;});

//Export model
module.exports = mongoose.model('Participant', ParticipantSchema);