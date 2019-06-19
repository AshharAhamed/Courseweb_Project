const mongoose=require('mongoose');

const CourseSchema = new mongoose.Schema({
    CourseName : String,
    InchargLecture : String,
    CourseId : String,
    NumberOfEnrolledStudent : Number,
    yearOfCourse : Number,
    CourseAddedDate : String

});
const Course = mongoose.model('Course',CourseSchema);
module.exports = Course;