const express = require('express');

const app = express();
const server = require('http').Server(app);


const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use(`${config.publicPath}`, express.static('public'));

server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${config.host}.${config.port}`);
});
