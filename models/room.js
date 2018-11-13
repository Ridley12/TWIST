var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoomSchema = new Schema(
  {
    room_number: {type: String, required: true, max: 100},
    building: {type: String, required: true},
    capacity: {type: String, required: true, max: 100},
  }
);

// Virtual for room's number
RoomSchema
.virtual('room_number')
.get(function () {
  return this.room_number;
});

// Virtual for room's building
RoomSchema
.virtual('building')
.get(function () {
  return this.building;
});

// Virtual for room's capacity
RoomSchema
.virtual('building')
.get(function () {
    return this.capacity;
});

//Export model
module.exports = mongoose.model('Room', RoomSchema);