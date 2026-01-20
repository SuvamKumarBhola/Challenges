const userService = require('../services/userService');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getUser = catchAsync(async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await userService.getUserById(userId);

        res.status(200).json({
            status: 'success',
            data: { user }
        });
    } catch (err) {
        return next(new AppError('No user found with that ID', 404));
    }
});