// src/components/DermatologistDashboard/Chat.js
import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "Dermatologist" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h4>Chat with Patient</h4>
      <ListGroup className="chat-messages">
        {messages.map((message) => (
          <ListGroup.Item key={message.id} className={`message ${message.sender.toLowerCase()}`}>
            {message.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form className="chat-input">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Chat;