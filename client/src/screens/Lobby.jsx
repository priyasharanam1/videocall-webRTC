import React, { useState, useCallback } from "react";
import "./Lobby.css";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({email, room})
  }, [email, room])

  return (
    <div className="lobby-container">
      <h1>Lobby</h1>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID : </label>
        <input
          className="items"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room No. : </label>
        <input
          className="items"
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button className="items btn">Join Room</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
