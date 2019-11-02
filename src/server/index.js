const express = require('express');
const os = require('os');

const app = express();
var server = require('http').createServer(app);
const socket = require('./socket.js')(server);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
