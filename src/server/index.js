const express = require('express');
const os = require('os');

const app = express();
var server = require('http').createServer(app);
const socket = require('./socket.js')(server);

let codeCheck = require("./codeCheck.js");
app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

app.use(express.static('dist'));
app.post('/runCode', function(req, res) {
    const code = req.body.code;
    let response = codeCheck.runCode(code);
    console.log(typeof(response));
    res.send(response);
})

server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
