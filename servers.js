const express = require("express");
const app = express();
const hostName = '127.0.0.1';
const port = 8080;
app.listen(port, hostName);
app.use('/static', express.static('static'));
app.use('/pic', express.static('pic'));
app.use('/icon', express.static('icon'));
app.use('/data', express.static('data'));