const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export default class MailService {

    sendMail() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount =  nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "woodcreakuniversity@gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: woodcreakuniversity, // generated ethereal user
                pass: Woodcreak123 // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = transporter.sendMail({
            from: 'woodcreakuniversity@gmail.com', // sender address
            to: "backupsathira1@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
};