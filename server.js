require('babel-polyfill');
const {createServer} = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./mailer');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dev = app.get('env') !== 'production'

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
  
  app.use(express.static(path.resolve(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

if (dev) {
  app.use(morgan('dev'));
}

app.post('/contact', async (req, res) => {
  try {
    const { email, name, message } = req.body
    const message = {
      from: `${name} <${email}`
      text: message
    }
    await sendEmail(message)
    console.log(`Sent the message "${message}" from ${name} <${email}>`);
  } catch(error) {
    console.log(`Failed to send message "${message}" from ${name} <${email}> with the error ${error && error.message}`);
  }
})

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;
  
  console.log(`server listening on port ${PORT}`);
})