import React, { useState, useRef, useEffect } from 'react';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';
import './Css.css';

const Messagesp = () => {
  const [reply, setReply] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    {
      name: 'John Doe',
      date: '2023-10-15',
      status: 'Unread',
      conversation: [
        { sender: 'Dermatologist', content: 'Hi, try lotion.', date: '2023-10-15 10:30' },
        { sender: 'Patient', content: 'Hi, I’ve been experiencing severe acne lately.', date: '2023-10-15 11:00' }
      ]
    },
    {
      name: 'Jane Smith',
      date: '2023-11-01',
      status: 'Read',
      conversation: [
        { sender: 'Dermatologist', content: 'hello lets fix an appointment', date: '2023-11-01 09:15' },
        { sender: 'Patient', content: 'I have a rash on my legs.', date: '2023-11-01 10:00' }
      ]
    },
    {
      name: 'Emily Johnson',
      date: '2023-12-05',
      status: 'Unread',
      conversation: [
        { sender: 'Dermatologist', content: 'lets try something stronger.', date: '2023-12-05 14:20' },
        { sender: 'Patient', content: 'The lotion is making it worse.', date: '2023-12-05 15:00' }
      ]
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, selectedChat]);

  const handleSelectChat = (index) => {
    setSelectedChat(index);
  };

  const handleReplySend = () => {
    if (reply.trim()) {
      const updated = [...messages];
      const newMessage = {
        sender: 'Patient',
        content: reply,
        date: new Date().toLocaleString(),
      };
      updated[selectedChat].conversation.push(newMessage);
      updated[selectedChat].status = 'Read';
      updated[selectedChat].date = new Date().toLocaleDateString();

      setMessages(updated);
      setReply('');
    }
  };

  return (
    < div className="messenger-container">
      {/* Sidebar - Shows only if chat is selected */}
      {selectedChat !== null && (
        <div className="sidebar-list">
          <h5 className="p-3">📨 Messages</h5>
          <ListGroup variant="flush">
            {messages.map((msg, index) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => handleSelectChat(index)}
                className={`message-item ${selectedChat === index ? 'active' : ''}`}
              >
                <strong>{msg.name}</strong>
                <div className="text-muted small">
                  {msg.conversation[msg.conversation.length - 1].content.slice(0, 30)}...
                </div>
                <small className="text-muted d-block">{msg.date}</small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}

      {/* Full-screen message list if no chat selected */}
      {selectedChat === null && (
        <div className="full-message-list">
          <h4 className="mb-4">💬 Dermatologist Messages</h4>
          <div className="message-list-vertical">
            {messages.map((msg, index) => (
              <Card key={index} className="message-bar" onClick={() => handleSelectChat(index)}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">{msg.name}</h6>
                    <small className="text-muted">{msg.conversation[0].content.slice(0, 60)}...</small>
                  </div>
                  <div className="text-end">
                    <small className="text-muted">{msg.date}</small><br />
                    <span className={`badge ${msg.status === 'Unread' ? 'bg-danger' : 'bg-success'}`}>{msg.status}</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Chat window */}
      {selectedChat !== null && (
        <div className="chat-window">
          <Card className="d-flex flex-column h-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5>🧑 {messages[selectedChat].name}</h5>
              <Button variant="outline-secondary" size="sm" onClick={() => setSelectedChat(null)}>← Back</Button>
            </Card.Header>
            <Card.Body style={{ overflowY: 'auto' }}>
              {messages[selectedChat].conversation.map((msg, i) => (
                <div key={i} className={`mb-3 ${msg.sender === 'Patient' ? 'text-end' : 'text-start'}`}>
                  <div
                    className={`p-2 rounded ${
                      msg.sender === 'Patient' ? 'bg-info text-white' : 'bg-light'
                    }`}
                    style={{ display: 'inline-block', maxWidth: '70%' }}
                  >
                    <strong>{msg.sender}</strong>
                    <div>{msg.content}</div>
                    <small className="text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>{msg.date}</small>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </Card.Body>
            <Card.Footer>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Type your reply..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleReplySend()}
                />
                <Button variant="primary" className="ms-2" onClick={handleReplySend}>
                  Send
                </Button>
              </Form>
            </Card.Footer>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Messagesp;
