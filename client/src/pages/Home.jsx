import React, { useState } from "react";
import { useSocket } from "../providers/Socket";

const Homepage = () => {
  const { socket } = useSocket();

  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId });
  };

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          className="items"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email here"
        />
        <input
          className="items"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button className="items btn" onClick={handleJoinRoom}>
          Enter Room
        </button>
      </div>
    </div>
  );
};

export default Homepage;
