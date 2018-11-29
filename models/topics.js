var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TopicSchema = new Schema(
  {
    topic_code: {type: String, required: true, max: 100},
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 100},});

// Virtual for topic's code
TopicSchema
.virtual('topic_code')
.get(function () {
  return this.topic_code;});

// Virtual for topic's title
TopicSchema
.virtual('title')
.get(function () {
  return this.title;});

// Virtual for topic's title
TopicSchema
.virtual('description')
.get(function () {
    return this.description;});

//Export model
module.exports = mongoose.model('Topic', TopicSchema);