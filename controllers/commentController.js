const { Comment } = require('../models');

exports.createComment = async (req, res) => {
    const { content } = req.body;
    await Comment.create({ content, user_id: req.session.userId, post_id: req.params.postId });
    res.redirect('/');
};

exports.getComments = async (req, res) => {
    const comments = await Comment.findAll({ where: { post_id: req.params.postId } });
    res.render('homepage', { comments });
};