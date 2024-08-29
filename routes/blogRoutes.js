const express = require('express');
const { getAllPosts, createPost, editPost, updatePost, deletePost } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getAllPosts);
router.post('/posts', createPost);
router.get('/posts/:id/edit', editPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

module.exports = router;