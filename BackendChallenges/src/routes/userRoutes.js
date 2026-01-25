const express = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const { createUserSchema } = require('../Validations/userSchema');

const router = express.Router();

router.post(
    '/',
    validate(createUserSchema),
    userController.createUser 
);

router.get('/:id', userController.getUser);

module.exports = router;