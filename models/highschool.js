var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HighSchoolSchema = new Schema(
  {
    high_school_id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},});

// Virtual for high school's id
HighSchoolSchema
.virtual('high_school_id')
.get(function () {
  return this.high_school_id;});

// Virtual for high school's name
HighSchoolSchema
.virtual('name')
.get(function () {
  return this.name;});

//Export model
module.exports = mongoose.model('High School', HighSchoolSchema);