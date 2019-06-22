const StudentModel = require('../models/Student');
const CourseModel = require('../models/course.model.schema');
const md5 = require('md5');


var StudentController = function () {

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: data.SID}).then(student => {
                if (student === null) {
                    const student = new StudentModel({
                        FirstName: data.FirstName,
                        LastName: data.LastName,
                        SID: data.SID,
                        Password: data.NIC,
                        Email: data.Email,
                        Mobile: data.Mobile,
                        DoB: data.DoB,
                        NIC: data.NIC,
                        Faculty : data.Faculty,
                        Gender : data.Gender
                    });

                    // for( i = 0 ; i < data.course.length ; ++i){
                    //     var courseId = data.course[i];
                    //     CourseModel.find({CourseId : courseId}).then( course => {
                    //         console.log(course[0].CourseName);
                    //         student.course = course[0]
                    //     })
                    // }
                    // for( i = 0 ; i < data.course.length ; ++i){
                    //     var courseId = data.course[i];
                    //     CourseModel.findById(courseId).then( course => {
                    //         // console.log(course[0].CourseName);
                    //         // student.course = course[0]
                    //         console.log(course)
                    //         student.course = course
                    //         student.save()
                    //     })
                    // }

                    student.Password = md5(data.NIC);
                    student.save().then(student => {
                        resolve({status: 200, message: 'Student Added Successfully'});
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Staff ID is already being used!'})
                }
            })
        });
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            StudentModel.find().then((lecturers) => {
                resolve(lecturers);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.get = (StudentID) => {
        return new Promise((resolve, reject) => {
            StudentModel.findOne({SID: StudentID}).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else
                    resolve(student);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.updateProfile = (StudentID, data) => { //all, some data ?
        return new Promise((resolve, reject) => {
            StudentModel.findOneAndUpdate(({SID: StudentID}), data).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else
                    resolve({status: 200, message: "Student '" + StudentID + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.enrollCourse = (SID, data) => { //all, some data ?
        return new Promise((resolve, reject) => {
            StudentModel.findOneAndUpdate(({SID: SID}), data).then((student) => {
                if (student === null)
                    resolve({status: 404, message: 'Student not found'});
                else
                    student.course = data.course,
                        resolve({status: 200, message: "Student '" + SID + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.myCourse = (SID) => {
        return new Promise((resolve, reject) => {
            StudentModel.find({SID: SID}).populate('course').exec().then(data => {
                resolve({status: 200, data: data})
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.changePassword = (StudentID, oldPassword, newPassword) => {
        return new Promise((resolve, reject) => {
            StudentModel.find({SID: StudentID}).then((student) => {
                if (student[0].Password === md5(oldPassword)) {
                    student[0].Password = md5(newPassword);
                    student[0].save().then(() => {
                        resolve({status: 200, message: 'Password Changed Successfully !'});
                    }).catch(err => {
                        reject({status: 500, err});
                    })
                } else
                    resolve({status: 500, message: 'Invalid Password !'});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };
};


module.exports = new StudentController();