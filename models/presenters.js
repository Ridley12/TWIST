var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PresenterSchema = new Schema(
  {
    presenter_id: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    first_name: {type: String, required: true, max: 100},
    occupation: {type: String, required: true, max: 100},
    main_phone: {type: Number, required: true, max: 11},
    mobile_phone: {type: Number, required: true, max: 11},
    email: {type: String, required: true, max: 100},});

// Virtual for presenter's id
PresenterSchema
.virtual('presenter_id')
.get(function () {
  return this.presenter_id;});

// Virtual for presenter's last name
PresenterSchema
.virtual('family_name')
.get(function () {
  return this.family_name;});

// Virtual for presenter's first name
PresenterSchema
.virtual('first_name')
.get(function () {
  return this.first_name;});

// Virtual for presenter's occupation
PresenterSchema
.virtual('occupation')
.get(function () {
  return this.occupation;});

// Virtual for presenter's main phone
PresenterSchema
.virtual('main_phone')
.get(function () {
  return this.main_phone;});

// Virtual for presenter's mobile phone
PresenterSchema
.virtual('mobile_phone')
.get(function () {
  return this.mobile_phone;});

// Virtual for presenter's email
PresenterSchema
.virtual('email')
.get(function () {
  return this.email;});

//Export model
module.exports = mongoose.model('Presenter', PresenterSchema);