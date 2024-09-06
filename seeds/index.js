//const { seedPosts } = require('./postData');
const { User } = require('../models');
const sequelize = require('../config/connection');
const userData = require('./userData.json');

const seedData = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    //await seedPosts;

    process.exit(0);
};

seedData().then(() => {
    console.log('Database seeded');
});