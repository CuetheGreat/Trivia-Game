const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimiter = require('express-rate-limit');
const morgan = require('morgan');
require('dotenv').config();
const connectMongoDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const questionRoutes = require('./routes/questionRoutes');
const questionAdminRoutes = require('./routes/questionAdminRoutes');

// Connect to MongoDB
connectMongoDB();

// Setup Express server
const app = express();

app.use(morgan('combined'));

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());
app.use(helmet());

// Rate limiter middleware
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API routes
app.use('/api/trivia', questionRoutes);
app.use('/api/admin', questionAdminRoutes);

// Default route
app.get('*', (req, res) => {
  res.json({
    greeting: 'Hello',
  });
});

// Error handler middleware should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
