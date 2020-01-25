const socket = require('socket.io');
const codeCheck = require("./codeCheck.js");

exports = module.exports = function(server, problem) {
  const io = socket(server);

  io.on('connection', (socket) => {
    // here you can start emitting events to the client
    console.log('Client connected id: ' + socket.id);

    socket.emit('action', {
      type: 'GET_PROBLEM',
      problem: problem.currentProblem
    })

    socket.on('message', code =>{
      socket.broadcast.emit('update', code);
    })

    socket.on('action', (action) => {
      switch(action.type){
        case 'socket/CHANGE_CODE':
          socket.broadcast.emit('action', {
            type:'UPDATE_OPPONENT_CODE',
            code: action.code
          });
          break;
        case 'socket/SUBMIT_CODE':
          let response = codeCheck.runCode(action.code, problem.currentProblem);
          if(response.error) {
            // emit to user
            socket.emit('action', {
              type:'SUBMIT_FAILURE',
              error: response.error
            });
            // emit to opponent
            socket.broadcast.emit('action', {
              type:'OPPONENT_SUBMIT_FAILURE',
              error: response.error
            });
          } else if(response.numTestCasesPassed === response.numTestCasesTotal) {
            socket.emit('action', {
              type:'WIN'
            });
            // emit to opponent
            socket.broadcast.emit('action', {
              type:'OPPONENT_WIN'
            });
          }else {
            // emit to user
            socket.emit('action', {
              type:'SUBMIT_SUCCESS',
              data: response
            });
            // emit to opponent
            socket.broadcast.emit('action', {
              type:'OPPONENT_SUBMIT_SUCCESS',
              data: response
            });
          }
          break;
      }
    });
  });
}
