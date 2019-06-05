const LecturerModel = require('../models/Lecturer');

const LecturerController = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: data.Username}).then(lecturer => {
                if (lecturer === null) {
                    const newLecturer = new LecturerModel(data);
                    newLecturer.save().then(lecturer => {
                        resolve({status : 200, message : 'Staff Member Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err})
                    });
                } else
                    resolve({status: 500, message: 'Username is already being used!'})
            })
        })
    };

    this.login = (username, password) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then(lecturer => {
                if (lecturer != null && lecturer.Password.toString() === password) {
                    resolve({
                        login: 'Success',
                        Username: lecturer.Username,
                        Type: 'Lecturer'
                    });
                } else {
                    reject({
                        login: 'Fail',
                        Username: '',
                        Type: ''
                    });
                }
            }).catch(err => {
                reject({status: 500, err});
            });
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