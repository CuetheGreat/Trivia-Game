const { CustomError } = require('../utils/customError');

module.exports = errorHander = (err, req, res, next) => {
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
