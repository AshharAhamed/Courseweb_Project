const nodeMailer = require('nodemailer');

class MailService{
    constructor(){

    }

    sendMail(recipient, subject, messageBody) {
        this.transporter = nodeMailer.createTransport({
            service : 'gmail',
            auth:{
                user: 'woodcreakuniversity@gmail.com',
                pass: 'Woodcreak123'
            }
        });

        this.mailOptions = {
            from:'woodcreakuniversity@gmail.com',
            to: recipient.toString(),
            subject: subject.toString(),
            text: messageBody.toString()
        };

        this.transporter.sendMail(this.mailOptions, function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log('Email Successfully Sent')
            }
        });
    }
}

exports.MailService = MailService;