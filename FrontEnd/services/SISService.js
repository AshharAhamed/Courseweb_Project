import ApiService from './APIService';


export default class SISService {

    constructor() {
        this.apiService = new ApiService();
    }

    //for user login
    // userLogin(loginRequest) {
    //
    //     return new Promise((resolve, reject) => {
    //
    //         this.apiService.post('authorizations/userLogin', loginRequest, true).then(loginResponse => {
    //             resolve(loginResponse);
    //         });
    //     });
    // }

    // // patient-registration
    // addPatientRegistration(patientRegistrationRequest) {
    //
    //     return new Promise((resolve, reject) => {
    //
    //         this.apiService.post('patient-registrations/addNewPatientRegistration', patientRegistrationRequest).then(patientRegistrationResponse => {
    //             resolve(patientRegistrationResponse);
    //         });
    //     });
    // }

    // get AllPatientRegistrations
    // getAllPatientRegistrations() {
    //
    //     return new Promise((resolve, reject) => {
    //
    //         this.apiService.get('patient-registrations/getAllPatientRegistrations').then(patientRegistrationResponse => {
    //             resolve(patientRegistrationResponse);
    //         });
    //     });
    // }

    // add new user
    addNewLecturer(userRequest) {

        return new Promise((resolve, reject) => {

            this.apiService.post('lecturers/addLecturer', userRequest).then(usersResponse => {
                resolve(usersResponse);
            });
        })
    }
}