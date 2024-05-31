const { CustomError } = require('../utils/customError');
/**
 * Error handling middleware for the application.
 * Handles custom errors and unexpected errors, sending appropriate responses.
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const errorHander = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  } else {
    console.error('Unexpected Error: ', err);
    res.status(500).json({
      error: {
        message: 'Internal Server Error',
        status: 'error',
      },
    });
  }
};

module.exports = errorHander