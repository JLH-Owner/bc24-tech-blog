const db = require('../models');

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = await db.User.create({ username, password, email });
  req.session.userId = newUser.id;
  res.status(201).json(newUser);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username } });
  if (user && user.validPassword(password)) {
    req.session.userId = user.id;
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const logoutUser = (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { registerUser, loginUser, logoutUser };
