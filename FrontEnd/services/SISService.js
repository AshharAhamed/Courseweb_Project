import APIService from './APIService'
import UserService from './UserService'

export default class SISService {
    constructor() {
        this.apiService = new APIService();
        this.userService = new UserService();
    }

    //login method
    logUser(loginData) {
        return new Promise((resolve, reject) => {
            this.apiService.postLogin({Username: loginData.Username, Password: loginData.Password}).then(response => {
                this.userService.setUserDetails(response.data.login, response.data.Username, response.data.Type);
                this.userService.setTokenData(response.data.Token);
            }).catch(error => {
                console.log(error);
            })
        })
    }

    //-------------------------------------------------------Staff Functions ----------------------------------------------------------------------------
    addStaffMember(data) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/lecturer', data, "Node").then(response => {
               resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }

    getStaffList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/lecturer/', "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    deleteStaffMember(staffID) {
        return new Promise((resolve, reject) => {
            this.apiService.delete('/lecturer/' + staffID, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    getMemberProfile(staffID){
        return new Promise((resolve, reject) => {
            this.apiService.get('/lecturer/' + staffID, "Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    modifyMember(staffID, data){
        return new Promise((resolve, reject) => {
            this.apiService.put('/lecturer/' + staffID, data,"Node").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    //-------------------------------------------------------Admin Functions ----------------------------------------------------------------------------
    getAdminList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('/admins/', "SpringBoot").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    deleteAdminMember(username) {
        return new Promise((resolve, reject) => {
            this.apiService.delete('/admins/' + username, "SpringBoot").then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        });
    }

    //-------------------------------------------------------Email Functions ----------------------------------------------------------------------------
    sendEmail(data){
        return new Promise((resolve, reject) => {
            this.apiService.post('/email', data, "Node").then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })
        })
    }
}