const Question = require('../modles/questionModel');
const asyncHandler = require('../middlewares/asyncHandler');
const { NotFoundError, BadRequestError } = require('../utils/customError');

module.exports = questionController = {
  /**
   * Fetches all questions from the database and returns them.
   * @returns {Object[]} questions - Array of question objects
   * @returns {number} count - The total number of questions
   */
  getQuestions: asyncHandler(async (req, res) => {
    const questions = await Question.find();
    if (!questions) throw new NotFoundError('No question found');
    res.json({ count: questions.length, questions });
  }),
  /**
   * Fetches a random question from the database and returns it.
   * @returns {Object} question - The question object
   * @returns {number} question._id - The ID of the question
   * @returns {string} question.text - The question text
   * @returns {string[]} question.options - The options for the question
   * @returns {string} question.correctAnswer - The correct answer for the question
   */
  getRandomQuestion: asyncHandler(async (req, res) => {
    const max = await Question.countDocuments();
    if (max === 0) throw new NotFoundError('No Question Available');
    const random = Math.floor(Math.randon() * max);
    const question = await Question.findOne().skip(random);
    res.json({
      question,
    });
  }),
  /**
   * Handles the submission of an answer, compares it to the correct answer, and responds with the result.
   * @param {string} submittedAnswer - The answer submitted by the user.
   * @param {string} correctAnswer - The correct answer for the question.
   * @returns {boolean} - Returns true if the submitted answer is correct, otherwise false.
   */
  submitAnswer: asyncHandler(async (req, res) => {
    const { _id, answer } = req.body;
    if (!_id || !answer) throw new BadRequestError('Missing question ID or an answer.');
    const question = await Question.findById(questionId);
    if (!question) throw new NotFoundError('Question not found');
    const isCorrect = question.correctAnswer === answer;
    res.json({
      correct: isCorrect,
    });
  }),
};
