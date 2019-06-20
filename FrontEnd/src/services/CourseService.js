import APIService from "./APIService";


export default class CourseService {
    constructor (){
        this.apiService = new APIService();
    }

    addCourse(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/course/addCourse', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    deleteCourse(courseId){
        return new Promise((resolve, reject) => {
            this.apiService.delete('/course/deleteCourse/' + courseId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getAllCourses(){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/getAll', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    editCourse(){

    }
    getOneCourse(courseId){
        return new Promise((resolve, reject) => {
            this.apiService.get('/course/getOneCourse/' + courseId, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }
}