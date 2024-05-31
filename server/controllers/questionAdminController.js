const Question = require('../modles/questionModel');
const asyncHandler = require('../middlewares/asyncHandler');
const { NotFoundError, BadRequestError } = require('../utils/customError');
const Joi = require('joi');

/**
 * Defines the schema for a question object using Joi.
 * @property {string} question - The question text, required.
 * @property {string[]} options - An array of options for the question, required.
 * @property {string} correctAnswer - The correct answer for the question, required.
 * @property {string} category - The category of the question, required.
 */
const questionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(Joi.string()).required(),
  correctAnswer: Joi.string().required(),
  category: Joi.string().required(),
});

module.exports = questionAdminController = {
  /**
   * Creates a new question and saves it to the database.
   * Validates the request body against the question schema.
   * @throws Will throw a BadRequestError if validation fails or any required field is missing.
   * @returns {Objec
   * t} newQuestion - The newly created question object.
   */
  createQuestion: asyncHandler(async (req, res) => {
    const { error } = questionSchema.validate(req.body);
    if (error) throw new BadRequestError(error.details[0].message);
    const { question, options, correctAnswer, category } = req.body;
    if (!question || !options || !correctAnswer || !category) {
      throw new BadRequestError('All fields are required');
    }
    const newQuestion = new Question({
      question,
      options,
      correctAnswer,
      category,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  }),
  /**
   * Updates an existing question in the database.
   * Validates the request body against the question schema.
   * @throws Will throw a BadRequestError if validation fails or any required field is missing.
   * @throws Will throw a NotFoundError if the question is not found.
   * @returns {Object} updatedQuestion - The updated question object.
   */
  updateQuestion: asyncHandler(async (req, res) => {
    const { error } = questionSchema.validate(req.body);
    if (error) throw new BadRequestError(error.details[0].message);
    const { id } = req.params;
    const { question, options, correctAnswer } = req.body;
    if (!question || !options || !correctAnswer) {
      throw new BadRequestError('All fields are required');
    }
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { question, options, correctAnswer },
      { new: true, runValidators: true }
    );
    if (!updatedQuestion) {
      throw new NotFoundError('Question not found');
    }
    res.json(updatedQuestion);
  }),
  /**
   * Deletes an existing question from the database.
   * @throws Will throw a NotFoundError if the question is not found.
   * @returns {Object} - A success message.
   */
  deleteQuestion: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) {
      throw new NotFoundError('Question not found');
    }
    res.json({ message: 'Question deleted successfully' });
  }),
  /**
   * Fetches all questions from the database and returns them.
   * @returns {Object[]} questions - Array of question objects.
   */
  getAllQuestions: asyncHandler(async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
  }),
};
