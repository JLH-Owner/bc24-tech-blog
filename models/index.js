const Sequelize = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: 'userId' });
db.Post.belongsTo(db.User, { foreignKey: 'userId' });
db.Post.hasMany(db.Comment, { foreignKey: 'postId' });
db.Comment.belongsTo(db.Post, { foreignKey: 'postId' });
db.Comment.belongsTo(db.User, { foreignKey: 'userId' });

const syncDatabase = async () => {
  await sequelize.sync({ force: false });
};

syncDatabase();

module.exports = db;
