var express = require('express');
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io')(server),
    port    = Number(process.env.PORT || 5000),

    status = {
        in1 : 1,
        in2 : 0
    };

server.listen(port, function() {
    console.log("Listening on " + port);
});

app.use(express.static(__dirname + '/'));

io.on('connection', function (socket) {

    socket.emit('in1', status.in1);
    socket.emit('in2', status.in2);

    socket.on('in1', function (data) {
        status.in1 = data;
        io.emit('in1', status.in1);
    });

    socket.on('in2', function (data) {
        status.in1 = data;
        io.emit('in2', status.in1);
    });

});
