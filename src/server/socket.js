const socket = require('socket.io');

exports = module.exports = function(server) {
  const io = socket(server);

  io.on('connection', (socket) => {
    // here you can start emitting events to the client
    console.log('Client connected id: ' + socket.id);

    socket.on('message', code =>{
      socket.broadcast.emit('update', code);
    })
  });
}
