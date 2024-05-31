const express = require('express');
const {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
} = require('../controllers/questionAdminController');
const router = express.Router();

router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);
router.get('/questions', getAllQuestions);

module.exports = router;
