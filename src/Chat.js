import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");
function Chat() {
  const [message, setmessage] = useState("");
  const [chat, setchat] = useState([]);
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message });

    setmessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      setchat([...chat, payload]);
    });
  });
  return (
    <div>
      {chat.map((payload, index) => {
        return <p key={index}>{payload.message}</p>;
      })}
      <form onSubmit={sendChat}>
        <input
          type="text"
          name="chat"
          placeholder="send text"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Chat;
