import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

const CHATBOT_KEY = process.env.REACT_APP_CHATBOT_KEY;

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const updatedMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(updatedMessages);
    setInput("");

    try {
      const res = await axios.post("/.netlify/functions/api/chatbot", {
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: updatedMessages,
      });

      const reply = res.data.choices[0].message.content;
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Error fetching response." },
      ]);
    }
  };

  return (
    <>
      <button className="chat-toggle-button" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            ChatBot
            <button className="chat-close" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chat-window">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user" ? "chat-message-user" : "chat-message-bot"
                }
              >
                {m.content}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="chat-form">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input"
              placeholder="Type message..."
            />
            <button type="submit" className="chat-button">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
