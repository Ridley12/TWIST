var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = new Schema(
  {
    session_number: {type: String, required: true, max: 100},
    time: {type: String, required: true, max: 100},
  }
);

// Virtual for session's number
SessionSchema
.virtual('session_number')
.get(function () {
  return this.session_number;
});

// Virtual for session time
SessionSchema
.virtual('time')
.get(function () {
  return this.time;
});

//Export model
module.exports = mongoose.model('Session', SessionSchema);