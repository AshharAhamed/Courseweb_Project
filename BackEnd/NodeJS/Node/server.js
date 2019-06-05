//Import Libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Import Routing
const Lecturer = require('./routing/LecturerRouting');
const Mail = require('./routing/MailRouting');

//Import DatabaseConfigurations
const databaseConfig = require('./configuration/config');

//App Configurations
app.use(cors());
app.use(bodyParser.json());

//App Routing
// app.use('/api', require('./auth'));
app.use('/lecturer', Lecturer);
app.use('/email', Mail);

//Server Connection
app.listen(databaseConfig.app.port, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Server listening on port ' + databaseConfig.app.port);
});

//MongoDB Connection
mongoose.connect(databaseConfig.db, {useNewUrlParser: true, useFindAndModify: false});
mongoose.connection.on("connected", () => {
    console.log(`Connected to database ${databaseConfig.db}`);
});
mongoose.connection.on("error", err => {
    console.log(`Database Connection Failed ${err}`);
});