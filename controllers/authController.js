const { User } = require('../models');
const bcrypt = require('bcrypt');

//exports.login = async (req, res) => {
//    const { username, password } = req.body;
//    const user = await User.findOne({ where: { username } });
//
//    if (user && await bcrypt.compare(password, user.password)) {
//        req.session.userId = user.id;
//        return res.redirect('/dashboard');
//    }
//    res.redirect('/login');
//};

exports.signup = async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, username, password: hashedPassword });
    res.redirect('/login');
};

//exports.logout = (req, res) => {
//    req.session.destroy(() => {
//        res.redirect('/');
//    });
//};