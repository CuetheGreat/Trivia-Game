class CustomError extends Error{
  constructor(message, status) {
    super(message)
    this.status = status
    this.isOperational = true
    Error.captureStackTrace(this,this.constructor)
  }
}

class NotFoundError extends Error{
  constructor(message = 'Not Found') {
    super(message,404)
  }
}

class BadRequestError extends CustomError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

module.exports = { CustomError, NotFoundError, BadRequestError };