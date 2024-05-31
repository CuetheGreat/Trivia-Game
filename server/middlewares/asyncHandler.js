/**
 * A higher-order function that handles asynchronous route handlers and middleware.
 * It catches any errors and passes them to the next middleware (usually the error handler).
 * @param {Function} fn - The asynchronous function to be wrapped.
 * @returns {Function} - A new function that wraps the original function with error handling.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
module.exports = asyncHandler;
