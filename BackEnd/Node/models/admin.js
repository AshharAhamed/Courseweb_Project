'use strict';
const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Username: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});
const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;