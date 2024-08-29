const { User, Post } = require('../models/index');
const bcrypt = require('bcrypt');

const seedData = async () => {
    await User.bulkCreate([
        { username: 'Sammy123', password: await bcrypt.hash('password1', 10) },
        { username: 'Jeff234', password: await bcrypt.hash('password2', 10) },
        { username: 'Stacy345', password: await bcrypt.hash('password3', 10) },
        { username: 'John456', password: await bcrypt.hash('password4', 10) },
    ]);

    const users = await User.findAll();

    await Post.bulkCreate([
        { title: 'Coding', content: 'I love to code.', user_id: users[0].id},
        { title: 'Javascript', content: 'Javascript is fun.', user_id: users[1].id},
        { title: 'GitHub', content: 'GitHub is very useful.', user_id: users[2].id},
        { title: 'Coding Bootcamp', content: 'I am new here. I learn so much each day.', user_id: users[3].id},
    ]);
};

seedData().then(() => {
    console.log('Database seeded');
    process.exit(0);
});