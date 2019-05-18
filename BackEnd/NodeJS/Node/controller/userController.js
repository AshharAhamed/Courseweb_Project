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
        if (lecturer.Password.toString() === req.body.Password) {
            res.json({
                lecturer,
                login: 'Success'
            });
        } else {
            res.json({
                login: 'Fail'
            });
        }
    });
});

router.put("/:Username", (req, res) => {
    console.log('Working')
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

router.route('/getStaff/:StaffID').get(function (req, res) {
    let staffID = req.params.StaffID;
    Lecturer.find({StaffID: req.params.StaffID}).then((lecturer) => {
        res.send(lecturer);
    });
});

// router.route('/update/:StaffID').post(function (req, res) {
//     Lecturer.find({StaffID: req.params.StaffID}).then((lecturer) => {
//         if (!lecturer)
//             res.status(404).send("data is not found");
//         else {
//             lecturer.FirstName = req.body.FirstName;
//             lecturer.LastName = req.body.LastName;
//             lecturer.Mobile = req.body.Mobile;
//             lecturer.save().then(lecturer => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });

module.exports = router;