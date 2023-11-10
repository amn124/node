const nodemailer = require('nodemailer');

// Create a transporter object with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'usermail@gmail.com', // replace with your Gmail email
    pass: 'xxxxxx' // replace with your Gmail password or an app-specific password
  }
});

// Define the email options
const mailOptions = {
  from: 'usermail@gmail.com',
  to: 'usermail@gmail.com', // replace with your email
  subject: 'Test Email',
  text: 'Hello, this is a test email!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
