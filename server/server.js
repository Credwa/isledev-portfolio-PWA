const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../dist/'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// serve frontend files to server
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// email route
app.post('/sendmail', (req, res) => {
    console.log(req.body);
    if (validator.isEmail(req.body.email) && (req.body.name.length > 1) && (req.body.message.length >= 4)) {
        let smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL || 'craigroe7@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.accessToken
            }
        });

        let mailOptions = {
            from: process.env.EMAIL || 'craigroe7@gmail.com',
            to: process.env.EMAIL || 'craigroe7@gmail.com',
            subject: 'Isledev Email ' + req.body.subject,
            text: 'My Name: ' + req.body.name + '\nMy Email: ' + req.body.email + '\n' + req.body.message,
            generateTextFromHTML: true,
            html: '<b><h2>My Name: ' + req.body.name + '</h2><br>\n<h3>My Email: ' + req.body.email + '</h3><br>\n' + req.body.message + '</b>',
            auth: {
                user: process.env.EMAIL || 'craigroe7@gmail.com',
                refreshToken: process.env.REFRESH_TOKEN
            }
        };

        smtpTransport.sendMail(mailOptions, function (error, info) {
            console.log(error);
            console.log(info);
            if (error) {
                console.log(error);
                return res.status(400).send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send(req.body);
                res.status(200).send();
            }
            smtpTransport.close();
        });
    } else {
        return res.status(400).send('Data Invalid');
    }
})

// start server on specified port
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };
