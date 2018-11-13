var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HighSchoolSchema = new Schema(
  {
    id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
  }
);

// Virtual for high school's id
HighSchoolSchema
.virtual('id')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for high school's name
HighSchoolSchema
.virtual('name')
.get(function () {
  return this.name;
});

//Export model
module.exports = mongoose.model('High School', HighSchoolSchema);