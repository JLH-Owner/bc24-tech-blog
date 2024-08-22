const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/home', postController.home);
router.get('/dashboard', postController.dashboard);
router.post('/create', postController.createPost);

module.exports = router;