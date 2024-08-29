const { Post } = require('../models');

exports.getAllPost = async (req, res) => {
    const posts = await Post.findAll();
    res.render('homepage', { posts });
};

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    await Post.create({ title, content, user_id: req.session.userId });
    res.redirect('/dashboard');
};

exports.editPost= async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.render('dashboard', { post });
};

exports.updatePost = async (req, res) => {
    const { title, content } = req.body;
    await Post.update({ title, content }, { where: { id: req.params.id } });
    res.redirect('/dashboard');
};

exports.deletePost = async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.redirect('/dashboard');
};