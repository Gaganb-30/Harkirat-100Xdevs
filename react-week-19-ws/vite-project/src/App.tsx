import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState<string[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Recieved message: ", message.data);
      setMessage((m) => [...m, message.data]);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div>Loading... Connecting to socket server...</div>;
  }

  return (
    <>
      <input
        type="text"
        id="msg"
        name="msg"
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        onClick={() => {
          socket.send(msg);
        }}
      >
        Send
      </button>
      <div>
        {message.map((m, index) => (
          <p key={index}>{m}</p>
        ))}
      </div>
    </>
  );
}

export default App;
