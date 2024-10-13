// const express = require("express");
// const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server(8000,{
  cors: true,
});
// const app = express();

// app.use(bodyParser.json());

const emailToSocketMapping = new Map();
const socketidToEmailMapping = new Map();

io.on("connection", (socket) => {
  console.log("New connection established:", socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketMapping.set(email, socket.id);
    socketidToEmailMapping.set(socket.id,email);
    io.to(room).emit("user:joined", {email, id: socket.id});
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });
});

// Start the HTTP server
// app.listen(8000, () => console.log("HTTP server running at port 8000"));
// io.listen(8001, () => console.log("Socket.io server running at port 8001"));
