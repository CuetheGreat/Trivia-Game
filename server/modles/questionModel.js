const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const {v4:uuidv4} =  require('uuid')

const QuestionSchema = new Schema({
  _id: {
    type: String,
    required: true,
    default:  uuidv4
  }

  , question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
