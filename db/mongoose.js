const mongoose = require('mongoose');
const Summoner = require('./models/summoner');

if (undefined === process.env.DB_URL) {
    throw new Error('Missing DB_URL environment variable.');
}

function connect() {
    return mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {
    Summoner,
    connect,
};
