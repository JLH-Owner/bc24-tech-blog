const User = require ('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'post_id',
});

Post.belongsTo(User, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Comment.belongsTo(User, {
    foreignKey: 'comment_id',
});



module.exports = { User, Post, Comment };