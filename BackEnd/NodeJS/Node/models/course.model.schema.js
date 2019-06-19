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
    CourseAddedDate : String

});
const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;
