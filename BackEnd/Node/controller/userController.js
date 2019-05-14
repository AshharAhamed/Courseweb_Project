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

router.put("/:Username",(req,res)=>{
    Lecturer.findOneAndUpdate(({Username:req.params.Username}),req.body).then(()=>{
        Lecturer.find({Username:req.params.Username}).then((lecturer)=>{
            res.send(lecturer);
        });
    });
});

router.delete("/:Username",(req,res)=>{
    Lecturer.findOneAndDelete({Username:req.params.Username}).then((lecturer)=>{
        res.send(lecturer);
    });
});


module.exports = router;