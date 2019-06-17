import SISService from '../services/SISService'

export default class EmailService {
    constructor() {
        this.SISService = new SISService();
    }

    sendEmail(recepient, firstName, userName, password) {
        this.SISService.sendEmail({
            'recepient': recepient,
            'recepientName' : firstName,
            'subject': 'Registration',
            'messageType' : 'Lecturer Registration',
            'Username' : userName,
            'Password' : password
        }).then(res => {
            console.log(res.data);
        });
    }

    sendEmailToAdmin(recepient, userName) {
        this.SISService.sendEmail({
            'recepient': recepient,
            'recepientName' : userName,
            'subject': 'Registration',
            'messageType' : 'Admin Registration',
            'Username' : userName,
        }).then(res => {
            console.log(res.data);
        });
    }
}