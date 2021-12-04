const nodemailer = require('nodemailer');
const nodemailer_handlbars = require('nodemailer-express-handlebars');
let aws = require("aws-sdk");;
const config = process.env;

// configure AWS SDK

const ses = new aws.SES({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_KEY,
    region: "ap-southeast-1",
});

const smtpTransport = nodemailer.createTransport({
    SES: { ses, aws },
});

const handlebarsOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: `${__dirname}/mailtemplates`,
        layoutsDir: `${__dirname}/mailtemplates`,
        defaultLayout: '',
    },
    viewPath: `${__dirname}/mailtemplates`,
    extName: '.html'
};

smtpTransport.use('compile', nodemailer_handlbars(handlebarsOptions));


function sendMail(data) {
    data.from = `"Trailer2You" <${config.MAILER_EMAIL_ID}>`;
    smtpTransport.sendMail(data, function (err) {
        if (!err) {
            console.log("sendMail Success", data);
        } else {
            console.error("sendMail Error", err);
        }
    });
};

module.exports = sendMail;