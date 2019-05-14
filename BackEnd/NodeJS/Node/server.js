const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const databaseConfig = require('./configuration/config');
const app = express();
const users = require('./controller/userController');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect (databaseConfig.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("connected", () => {
    console.log(`Connected to database ${databaseConfig.db}`);
});
mongoose.connection.on("error", err => {
    console.log(`Database Connection Failed ${err}`);
});

app.use('/lecturers' , users);

app.listen(3001, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3001');
});