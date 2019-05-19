import axios from 'axios';

export default class EmailService {

    constructor(){}

    sendEmail(recepient, firstName, userName, password) {
        axios.post('http://localhost:3001/email/', {
            'recepient': recepient,
            'subject': 'Wood Creek University',
            'messageBody': 'Hi ' + firstName + ' ! \rYou have successfully registered for Weed Creek University Student Interactive System \rEnter the following Credentials to login\rUsername : ' + userName +'\rPassword : ' + password + '\rVisit : http://localhost:1234/'
        }).then(res =>{
            console.log(res.data);
        })
    }
}