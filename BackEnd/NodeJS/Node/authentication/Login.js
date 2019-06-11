const LecturerModel = require('../models/Lecturer');
const jwt = require('jsonwebtoken');
const config = require('../authentication/config');
const md5 = require('md5');
const axios = require('axios');

const UserLogin = function () {
    this.login = (username, password) => {
        return new Promise((resolve, reject) => {
            LecturerModel.findOne({Username: username}).then(lecturer => {
                if (lecturer != null && lecturer.Password.toString() === md5(password)) {
                    var token = jwt.sign({
                            user: username
                        },
                        config.secret, {
                            expiresIn: 150 * 60
                        });
                    resolve({
                        login: 'Success',
                        Username: lecturer.Username,
                        Type: 'Lecturer',
                        Token: token,
                    });
                } else {
                    axios.post("http://localhost:8080/admins/login", {
                        "userName": username,
                        "password": password
                    }).then(response => {
                        if(response.data.login === "Success"){
                        var token = jwt.sign({
                                user: username
                            },
                            config.secret, {
                                expiresIn: 150 * 60
                            });
                        resolve({
                            login: 'Success',
                            Username: username,
                            Type: 'Admin',
                            Token: token,
                        });
                        }else{
                            reject(response.data)
                        }
                    }).catch(err => {
                        reject({status: 500, err});
                    });
                }
            }).catch(err => {
                reject({status: 500, err});
            });
        })
    };
};

module.exports = new UserLogin();