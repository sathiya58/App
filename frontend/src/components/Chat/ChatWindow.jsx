// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001"); // Replace with backend URL

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);  // State to track sending status

  // Listen for chat messages from other users
  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  // Function to handle sending message
  const sendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages

    setIsSending(true); // Set sending status to true
    socket.emit("chat message", message); // Emit the message
    setMessage(""); // Clear input
  };

  return (
    <div className="chat-window bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Messages Area */}
      <div className="messages max-h-60 overflow-y-auto mb-4 border-b pb-4">
        {messages.map((msg, i) => (
          <div key={i} className="message bg-gray-200 p-2 my-2 rounded-lg">
            {msg}
          </div>
        ))}
      </div>

      {/* Input Field & Send Button */}
      <div className="input-area flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow border p-2 rounded-l-lg"
        />
        <button
          onClick={sendMessage}
          className="send-button bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          disabled={isSending || !message.trim()}  // Disable if sending or input is empty
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
