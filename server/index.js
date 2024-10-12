const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server({
  cors: true,
});
const app = express();

app.use(bodyParser.json());

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
  console.log("New connection established:", socket.id);
  socket.on("join-room", (data) => {
  const { roomId, emailId } = data;
  console.log(`User with email: ${emailId} is joining Room: ${roomId}`);
  emailToSocketMapping.set(emailId, socket.id);
  socket.join(roomId);
  socket.emit("Room Joined", {roomId});
  socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });
});
// io.on("connection", (socket) => {
  // console.log("New connection established:", socket.id);

  // socket.on("join-room", (data) => {
    // const { roomId, emailId } = data;
    // console.log(`User with email: ${emailId} is joining Room: ${roomId}`);
    
    // Save the socket ID for the email
    // emailToSocketMapping.set(emailId, socket.id);
    
    // Join the user to the room
    // socket.join(roomId);
    
    // Broadcast to the room that a user has joined
    // console.log(`Broadcasting to room ${roomId}: User ${emailId} joined.`);
    // socket.broadcast.to(roomId).emit("user-joined", { emailId });
  // });

  // Log when a user disconnects
  // socket.on("disconnect", () => {
    // console.log(`User with socket ID ${socket.id} disconnected.`);
  // });
// });

// Start the HTTP server
app.listen(8000, () => console.log("HTTP server running at port 8000"));
io.listen(8001, () => console.log("Socket.io server running at port 8001"));
