const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Middleware to log request details
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
