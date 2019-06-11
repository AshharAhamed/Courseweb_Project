const LecturerModel = require('../models/Lecturer');
const jwt = require('jsonwebtoken');
const config = require('../authentication/config');
const md5 = require('md5');

const LecturerController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({StaffID: data.StaffID}).then(lecturer => {
                if (lecturer === null) {
                    const newLecturer = new LecturerModel(data);
                    newLecturer.Password = md5(data.Password);
                    newLecturer.save().then(lecturer => {
                        resolve({status: 200, message: 'Staff Member Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else {
                    reject({status: 500, message: 'Staff ID is already being used!'})
                }
            })
        })
    };

    this.update = (username, data) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOneAndUpdate(({Username: username}), data).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve({status: 200, message: "Lecturer '" + username + "' Successfully Updated"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.remove = (staffID) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOneAndDelete({StaffID: staffID}).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve({status: 200, message: "Staff Member of Staff ID '" + staffID + "' Successfully Deleted"});
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            LecturerModel.find().then((lecturers) => {
                resolve(lecturers);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    };

    this.get = (username) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then((lecturer) => {
                if (lecturer === null)
                    resolve({status: 404, message: 'Lecturer not found'});
                else
                    resolve(lecturer);
            }).catch(err => {
                reject({status: 500, err});
            })
        })
    }
};

module.exports = new LecturerController();