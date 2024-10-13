import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import ReactPlayer from 'react-player'

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`email : ${email} joined the room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    setMyStream(stream);
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);

    return () => {
      socket.off("user:joined", handleUserJoined);
    };
  }, [socket, handleUserJoined]);

  return (
    <div>
      <h1>Room page</h1>
      <h4>
        {remoteSocketId ? "Connected" : "No one else is there in the room"}
      </h4>
      {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}

      {
        myStream && (
            <>
            <h1>My Stream</h1>
            <ReactPlayer playing muted width='500px' height='300px' url={myStream}/>
            </>
        )
      }
    </div>
  );
};

export default RoomPage;
