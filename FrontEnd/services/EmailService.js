import axios from 'axios';
import SISService from '../services/SISService'

export default class EmailService {

    constructor() {
        this.SISService = new SISService();
    }

    sendEmail(recepient, firstName, userName, password) {
        this.SISService.sendEmail({
            'recepient': recepient,
            'subject': 'Wood Creek University',
            'messageBody': 'Hi ' + firstName + ' ! \rYou have successfully registered for Weed Creek University Student Interactive System \rEnter the following Credentials to login\rUsername : ' + userName + '\rPassword : ' + password + '\rVisit : http://localhost:1234/'
        }).then(res => {
            console.log(res.data);
        });
    }

    sendEmailToAdmin(recepient, userName) {
        this.SISService.sendEmail({
            'recepient': recepient,
            'subject': 'Wood Creek University',
            'messageBody': 'Hi ' + userName + ' ! \rYou have successfully registered for Weed Creek University Student Interactive System as an Admin \rEnter the following Credentials to login\rUsername : ' + userName + '\rVisit : http://localhost:1234/'
        }).then(res => {
            console.log(res.data);
        });
    }
}