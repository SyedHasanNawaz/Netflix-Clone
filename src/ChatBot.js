import React, { useState } from "react";
import axios from "axios";
import "./ChatBot.css";

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
      const res = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "meta-llama/llama-3.3-70b-instruct:free",
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "Chatbot",
          },
        }
      );

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
      {/* Floating Chat Button */}
      <button className="chat-toggle-button" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Box */}
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
