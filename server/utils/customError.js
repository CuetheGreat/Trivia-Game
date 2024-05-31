/**
 * Base class for custom errors.
 * @extends Error
 * @property {number} status - The HTTP status code associated with the error.
 * @property {boolean} isOperational - Indicates if the error is operational (user-related) or a programming error.
 */
class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Class representing a Not Found error.
 * @extends CustomError
 * @property {number} status - The HTTP status code associated with the error (default is 404).
 */
class NotFoundError extends CustomError {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

/**
 * Class representing a Bad Request error.
 * @extends CustomError
 * @property {number} status - The HTTP status code associated with the error (default is 400).
 */
class BadRequestError extends CustomError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

module.exports = { CustomError, NotFoundError, BadRequestError };