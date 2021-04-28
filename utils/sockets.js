const sockets = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            method: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        socket.emit('me', socket.id);

        socket.on('disconnect', () => socket.broadcast.emit('callended'));

        socket.on('calluser', ({ userToCall, signalData, from, name }) => io.to(userToCall).emit("calluser", { signal: signalData, from, name }));

        socket.on('answercall', (data) => io.to(data.to).emit('callaccepted', data.signal))
    });
};
module.exports = sockets;