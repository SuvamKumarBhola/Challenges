const express = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/validate');
const { createUserSchema } = require('../Validations/userSchema');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
    '/',
    validate(createUserSchema),
    userController.createUser 
);

router.get('/:id', userController.getUser);
router.post('/signup', validate(createUserSchema), authController.signup); 

module.exports = router;