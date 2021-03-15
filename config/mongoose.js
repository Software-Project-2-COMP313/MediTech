var config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    const db = mongoose.connect(config.db, {
        useUnifiedTopology: true,
        useNewUrlParser: true, useCreateIndex: true
    }).then(() => console.log('DB Connected!'))
        .catch(err => {
            console.log('Error');
        });

    require('../app/models/patient.server.model');
    require('../app/models/physician.server.model');
    require('../app/models/blog.server.model');

    // Return the Mongoose connection instance
    return db;
};