const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/N&K_project', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failture!!!')
    }
}

module.exports = { connect };