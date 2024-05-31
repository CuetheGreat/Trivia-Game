const Question = require('../modles/questionModel');
const asyncHandler = require('../middlewares/asyncHandler');
const { NotFoundError, BadRequestError } = require('../utils/customError');

module.exports = questionController = {
  getQuestions: asyncHandler(async (req, res) => {
    const question = await Question.find();
    if(!questionn) throw new NotFoundError('No question found')
    res.json(questions);
  }),
  getRandomQuestion: asyncHandler(async (req, res) => {
    const max = await Question.countDocuments();
    if (max === 0) throw new NotFoundError('No Question Available');
    const random = Math.floor(Math.randon() * max);
    const question = await Question.findOne().skip(random);
    res.json({
      question
    })
  }),
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
