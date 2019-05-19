'use strict';
const express = require('express');
const router = express.Router();
const app = express();
var MailService = require('../services/mailService').MailService;

router.post('/', (req, res) => {
    let myService = new MailService();
    myService.sendMail(req.body.recepient, req.body.subject, req.body.messageBody);
    res.sendStatus(200);
});

module.exports = router;