require('babel-polyfill');
const {createServer} = require('http');
const express = require('express');
const React = require('react');
const App = require('./src/App/App');
const Html = require('./src/Html');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
// Load any undefined ENV variables from a specified file.
var env = require('node-env-file');
if (process.env.NODE_ENV !== 'production') {
  env(__dirname + '/.env');
}
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)
const PROTOCOL = process.env.PROTOCOL || 'http'
const HOSTNAME = process.env.HOST || 'localhost'
const CORS =
  process.env.NODE_ENV === 'production' ? `${PROTOCOL}://${HOSTNAME}` : `*`

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dev = app.get('env') !== 'production'

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
  
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', '/index.html'));
  })
}

if (dev) {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/build'));
}

app.post('/contact', async (req, res) => {

  res.header('Access-Control-Allow-Origin', CORS)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Content-Type', 'application/json')
  
  const { email, name, message, key } = req.body
  const mailOptions = {
    from: `${email}`,
    to: 'israeldmatos@gmail.com',
    subject: `[israeldmatos.com] NEW message from ${name} <${email}>`,
    html: `<div style="border: 1px solid #e5e5e5; padding: 15px 20px; max-width: 600px; margin: auto;"
    <p>Hello Israel,<br/><br/>You got a new message from ${name} at ${email}</p><br/><br/>
    <p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;">${message}</p>
    <p><br/><br/>Best wishes,<br/>SendGrid</p></div>`
  }
  
  sgMail
  .send(mailOptions)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.log(error.toString()))
})

// const server = createServer(app);

// server.get('/', (req, res) => {

//   const body = renderToString(<App/>);
//   const title = "Rendering to server";

//   res.send(
//     Html({
//       body,
//       title,
//     })
//   );
// });

server.listen(PORT, err => {
  if (err) throw err;
  console.log(`server listening on port ${PORT}`);
})

