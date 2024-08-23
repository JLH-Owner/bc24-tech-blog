const express = require('express');
const exphbs = require('express-handlebars');
const { sessionMiddleware, errorHandler } = require('./config/middleware');
const apiRoutes = require('./routes/apiRoutes');
const userRoutes = require('./routes/userRoutes');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessionMiddleware);
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/user', userRoutes);

app.get('/', async (req, res) => {
  const posts = await db.Post.findAll();
  res.render('home', { posts });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
