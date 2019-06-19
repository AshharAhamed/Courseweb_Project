const express = require('express');
const router = express.Router();
const CourseController = require('../controller/course.controller');



router.post('/addCourse',(req,res) => {
    CourseController.Inser(req.body).then( (data) =>{
        res.json(data);
    }).catch( err =>{
        res.json(err);
    })
});

router.get('/getOneCourse/:CourseId',(req,res)=>{
    CourseController.getCourrseById(req.params.CourseId).then(data =>{
        res.json(data);
    }).catch(err =>{
        res.json(err);
    })
})
module.exports = router;