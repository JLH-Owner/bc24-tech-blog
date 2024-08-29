const express = require('express');
const { createComment } = require('../controllers/commentController');
const router = express.Router();

router.post('/posts/:postId/comments', createComment);

module.exports = router;