const AppError = require('../utils/AppError');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (err) {
        const errorMessage = err.errors.map(e => e.message).join(', ');

        next(new AppError(`Validation Error: ${errorMessage}`, 400));
    }
};

module.exports = validate;