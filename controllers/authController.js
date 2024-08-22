const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Failed to log in" });
    }

    req.session.userId = user._id;
    res.redirect('/posts/home');
};

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });
    await user.save();
    req.session.userId = user._id;
    res.redirect('/posts/home');
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};