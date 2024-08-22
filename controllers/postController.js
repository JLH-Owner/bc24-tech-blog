const Post = require('../models/postModel');

exports.home = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(5);
    res.render('home', { posts });
};

exports.dashboard = async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const posts = await Post.find({ userId: req.session.userId }).sort({ createdAt: -1 });
    res.render('dashboard', { posts });
};

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, userId: req.session.userId });
    await post.save();
    res.redirect('/posts/dashboard');
};