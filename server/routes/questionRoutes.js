const express = require('express');
const { getQuestions, getRandomQuestion, submitAnswer } = require('../controllers/questionController');

/**
 * Express router for handling question-related routes.
 * @route GET /questions - Retrieves all questions.
 * @route GET /question - Retrieves a random question.
 * @route POST /answer - Submits an answer and checks its correctness.
 */
const router = express.Router();

router.get('/questions', getQuestions);
router.get('/question', getRandomQuestion);
router.post('/answer', submitAnswer);

module.exports = router;
