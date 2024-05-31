const Question = require('../modles/questionModel');
const asyncHandler = require('../middlewares/asyncHandler');
const { NotFoundError, BadRequestError } = require('../utils/customError');
const Joi = require('joi');

const questionSchema = Joi.object({
  question: Joi.string().required(),
  options: Joi.array().items(Joi.string()).required(),
  correctAnswer: Joi.string().required(),
});

module.exports = questionAdminController = {
  createQuestion: asyncHandler(async (req, res) => {
    const { error } = questionSchema.validate(req.body);
    if (error) throw new BadRequestError(error.details[0].message);

    const { question, options, correctAnswer } = req.body;
    if (!question || !options || !correctAnswer) {
      throw new BadRequestError('All fields are required');
    }
    const newQuestion = new Question({
      question,
      options,
      correctAnswer,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  }),

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

  deleteQuestion: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(id);
    if (!deletedQuestion) {
      throw new NotFoundError('Question not found');
    }
    res.json({ message: 'Question deleted successfully' });
  }),

  getAllQuestions: asyncHandler(async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
  }),
};
