const nodeMailer = require('nodemailer');

const MailService = function () {
    this.sendMail = (recipient, subject, messageBody) => {
        return new Promise((response, reject) => {
            this.transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'woodcreakuniversity@gmail.com',
                    pass: 'Woodcreak123'
                }
            });

            this.mailOptions = {
                from: 'woodcreakuniversity@gmail.com',
                to: recipient.toString(),
                subject: subject.toString(),
                text: messageBody.toString()
            };

            this.transporter.sendMail(this.mailOptions, function (err, res) {
                if (err) {
                    reject({status : 500, message : err});
                    console.log(err)
                } else {
                    response({status : 200, message : 'Email Successfully Sent'});
                    console.log('Email Successfully Sent')
                }
            });
        })
    }
};

module.exports = new MailService();