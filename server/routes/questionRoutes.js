const express = require('express');
const { getQuestions, getRandomQuestion, submitAnswer } = require('../controllers/questionController');
const router = express.Router();

router.get('/questions', getQuestions);
router.get('/question', getRandomQuestion);
router.post('/answer', submitAnswer);

module.exports = router;
