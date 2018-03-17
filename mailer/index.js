var nodemailer = require('nodemailer');

var config = require('./config');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

const sendEmail = (message) => {

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error); 
        return   
      }
      resolve(info)
    })
  })
}

module.exports = sendEmail