const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const AppError = require('./utils/AppError');

const app = express();

// 1. Middlewares
app.use(express.json());

// 2. Routes
app.use('/api/v1/users', userRoutes);

// 3. Handle Unhandled Routes (404)
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 4. Global Error Handler
app.use(errorHandler);

module.exports = app;