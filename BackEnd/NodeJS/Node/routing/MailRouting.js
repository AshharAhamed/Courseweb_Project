const express = require('express');
const router = express.Router();
const MailService = require('../services/MailService');

router.post('/', (req, res) => {
    MailService.sendMail(req.body.recepient, req.body.subject, req.body.messageBody).then( data => {
        res.json(data)
    }).catch( err => {
        res.json(err);
    });
});

module.exports = router;