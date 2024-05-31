const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const rateLimiter = require('express-rate-limit')
const morgan = require('morgan')
require('dotenv').config();
const connectMongoDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const questionRoutes = require('./routes/questionRoutes');
const questionAdminRoutes = require('./routes/questionAdminRoutes');

// Connect to MongoDB
connectMongoDB();

const app = express();

app.use(morgan("combined"))
// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());
app.use(helmet())
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100
})
app.use(limiter)
// API routes
app.use('/api', questionRoutes);
app.use('/api/admin', questionAdminRoutes);

app.get('*', (req, res) => {
  res.json({
    greeting: 'Hello',
  });
});

// Error handler middleware should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
