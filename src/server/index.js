/* eslint-disable */
const express = require('express');
const os = require('os');

const app = express();
var server = require('http').createServer(app);

const codeCheck = require("./codeCheck.js");
const problem = require('./helpers/problem');
const socket = require('./socket.js')(server, problem);

problem.getRandomProblem();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());  

app.use(express.static('dist'));

app.post('/api/runCode', function(req, res) {
    const code = req.body.code;
    let response = codeCheck.runCode(code, problem.currentProblem);
    res.send(response);
})

server.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
