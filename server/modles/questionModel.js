const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const {v4:uuidv4} =  require('uuid')

/**
 * Mongoose schema and model definition for a Question.
 * @property {String} _id - The unique identifier for the question, default is a UUID.
 * @property {String} question - The question text, required.
 * @property {String[]} options - An array of options for the question, required.
 * @property {String} correctAnswer - The correct answer for the question, required.
 * @property {String} category - The category of the question, required.
 */
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
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
