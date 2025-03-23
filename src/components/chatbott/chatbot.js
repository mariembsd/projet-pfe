import React, { useState } from "react";
import "./chatbot.css"; // Import the updated CSS file

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, { text: inputValue, sender: "user" }]);

    setTimeout(() => {
      setMessages([...messages, { text: inputValue, sender: "user" }, { text: "This is a bot response.", sender: "bot" }]);
    }, 1000);

    setInputValue("");
  };

  return (
    <div className="chatbot-container">
      {/* Big Robot */}
      <div className="chatbot-robot" onClick={toggleChatbot}>
        <div className="robot-antenna"></div>
        <div className="robot-head">
          <div className="robot-eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </div>
        <div className="robot-body">Hi! I'm your AI Assistant</div>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h5>AI Assistant</h5>
            <small>How can I assist you?</small>
            <button className="close-btn" onClick={toggleChatbot}>
              ✖
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}>
                <span className="sender-badge">{message.sender === "user" ? "You" : "Bot"}</span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
