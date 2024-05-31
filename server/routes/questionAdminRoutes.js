const express = require('express');
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
} = require('../controllers/questionAdminController');

/**
 * Express router for handling question administration routes.
 * @route POST /questions - Creates a new question.
 * @route PUT /questions/:id - Updates an existing question by ID.
 * @route DELETE /questions/:id - Deletes an existing question by ID.
 * @route GET /questions - Retrieves all questions.
 */
const router = express.Router();

router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);
router.get('/questions', getAllQuestions);

module.exports = router;
