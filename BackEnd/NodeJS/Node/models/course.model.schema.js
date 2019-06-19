const mongoose=require('mongoose');

const CourseSchema = new mongoose.Schema({
    
    CourseName : String,
    InchargLecture : String,
    CourseId : String,
    NumberOfEnrolledStudent : Number,
    Year : Number,
    Semester : String,
    Faculty : String,
    Department : String,    
    CourseAddedDate : String,
    AcceptByLectureFlag : {
        type : Number,
        min : 0,
        max : 1,
        default :0
    },

});
const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;
