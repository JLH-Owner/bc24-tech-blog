const db = require('../models');

const getAllPosts = async (req, res) => {
  const posts = await db.Post.findAll();
  res.json(posts);
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = await db.Post.create({ title, content, userId: req.session.userId });
  res.status(201).json(newPost);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await db.Post.update({ title, content }, { where: { id } });
  res.status(200).json({ message: 'Post updated successfully' });
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await db.Post.destroy({ where: { id } });
  res.status(204).send();
};

module.exports = { getAllPosts, createPost, updatePost, deletePost };
