const express = require('express');
const courseModel = require("../models/course.model.schema");


const CourseController = function () {

    this.inser = (data) =>{
        return new Promise((resolve,reject) => {
            courseModel.findOne({CourseId : data.CourseId}).then(course =>{
                if (course === null){
                    const newCourse = new courseModel(data);
                    newCourse.save().then(data=>{
                        resolve({status: 200, message: 'Course Successfully Added!'});
                    }).catch(err => {
                        reject({status: 500, message: err});
                    })
                }else {
                    reject({status:500, message : 'Course is already Exist'});
                }
            })
        })
    }

    this.update = (CourseID ,data) =>{
        return new Promise((resolve,reject) =>{
            courseModel.findOneAndUpdate(({CourseId : CourseID}),data).then((course) =>{
                if (course === null)
                    resolve({status: 404, message: 'Course not found'});
                else
                    resolve({status: 200, message: "Staff Member of Staff ID '" + staffID + "' Successfully Deleted"});
            }).catch(err =>{
                reject({status: 500, err});
            })
        });
    }

    this.delete = (CourseID) =>{
        return new Promise( (resolve,reject) =>{
            courseModel.findOneAndRemove({CourseId : CourseID}).then( data=>{
                if (data ===null)
                    resolve({status : 404, message : 'Course Not Found'});
                else
                    resolve({status : 200, message : 'Course Successfully deleted'});
            }).catch(err =>{
                reject({status : 500, err});
            })
        })
    }

    this.getCourrseById = (CourseID)=>{
        return new Promise((resolve,reject) =>{
            courseModel.findOne({CourseId : CourseID}).then(data =>{
                if (data ===null)
                    resolve({status : 404, message : 'Course Not Found'});
                else
                    resolve({status : 200, data : data});

            }).catch(err =>{
                reject({status:500, message : err});
            })
        })
    }
}

module.exports = new CourseController();