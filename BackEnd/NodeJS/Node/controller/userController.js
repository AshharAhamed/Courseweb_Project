'use strict';
const express = require('express');
const router = express.Router();
const Lecturer = require('../models/lecturer');
const app = express();
const LecturerModel = require('../models/lecturer');

router.post('/addLecturer', (req, res) => {
    const lecturer = new LecturerModel(req.body);
    lecturer.save().then(lecturer => {
        console.log(res.json(lecturer));
        res.json(lecturer);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.post('/login', (req, res) => {
    Lecturer.findOne({Username: req.body.Username}).then(lecturer => {
        if (lecturer != null && lecturer.Password.toString() === req.body.Password) {
            res.json({
                login: 'Success',
                Username : lecturer.Username,
                Type : 'Lecturer'
            });
        } else {
            res.json({
                login: 'Fail',
                Username : '',
                Type : ''
            });
        }
    });
});

router.put("/:Username", (req, res) => {
    Lecturer.findOneAndUpdate(({Username: req.params.Username}), req.body).then(() => {
        Lecturer.find({Username: req.params.Username}).then((lecturer) => {
            res.send(lecturer);
        });
    });
});

router.delete("/:StaffID", (req, res) => {
    Lecturer.findOneAndDelete({StaffID: req.params.StaffID}).then((lecturer) => {
        res.send(lecturer);
    });
});


router.route('/').get(function (req, res) {
    Lecturer.find(function (err, lecturers) {
        if (err) {
            console.log(err);
        } else {
            res.json(lecturers);
        }
    });
});

router.route('/getStaff/:Username').get(function (req, res) {
    Lecturer.find({Username: req.params.Username}).then((lecturer) => {
        res.send(lecturer);
    });
});

module.exports = router;