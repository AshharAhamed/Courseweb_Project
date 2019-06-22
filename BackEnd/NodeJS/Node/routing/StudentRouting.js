const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');

router.post('/', (req, res) => {
    StudentController.insert(req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/", (req, res) => {
    StudentController.getAll().then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});


router.get("/:SID", (req, res) => {
    StudentController.get(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.get("/myCourse/:SID", (req, res) => {
    StudentController.myCourse(req.params.SID).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/myProfile/:SID", (req, res) => {
    StudentController.updateProfile(req.params.SID, req.body).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/enrollCourse/:SID", (req, res) => {
    StudentController.enrollCourse(req.body.SID, req.body.course).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

router.put("/password", (req, res) => {
    StudentController.changePassword(req.body.Username, req.body.OldPassword, req.body.NewPassword).then((data) => {
        res.json(data)
    }).catch(err => {
        res.json(err);
    })
});

module.exports = router;