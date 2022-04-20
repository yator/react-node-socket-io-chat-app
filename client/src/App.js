import './App.css';
import io from "socket.io-client"
import { useState } from 'react';
import Chat from './Chat';



const socket = io.connect("http://localhost:3001");

function App() {
  const[username ,setUsername]=useState("");
  const [room,setRoom] =useState("");

  const joinRoom=()=>{
    if (username !== "" && room !== "")
    {
      socket.emit("join_room",room);

    }

  };
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder='abelo..' onChange={(event)=>{setUsername(event.target.value)}}/>
      <input type="text" placeholder='Room ID ..' onChange={(event)=>{setRoom(event.target.value)}}/>
      <submit onClick={joinRoom}>Join A Room</submit>
      <Chat socket={socket}/>
    </div>
  );
}

export default App;
