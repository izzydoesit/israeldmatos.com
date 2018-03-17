// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
// var config = require('./config');
// 
// const transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     type: 'OAuth2',
//     ...config
//   }
// }, { to: 'israeldmatos@gmail.com' }));
// 
// const sendEmail = (mailOptions) => {
// 
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log('error:', error)
//         reject(new Error(error)); 
//         return 'done'
//       } else {
//         console.log('response:', info.response)
//         resolve(response)
//       }
//     })
//   })
// }
// 
// module.exports = sendEmail