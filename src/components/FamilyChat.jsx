import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, List, ListItem, ListItemText } from '@material-ui/core';
import io from 'socket.io-client';
import config from '../config.json'

const FamilyChat = ({ familyId, user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Implement real-time chat logic using your chosen chat library (e.g., Socket.IO)

  useEffect(() => {
    const socket = io(config.apiUrl); // Replace with your server address
  
    socket.on('receive-message', (message) => {
      setMessages([...messages, message]);
    });
  
    // Handle sending messages using socket.emit('send-message', messageContent)
  }, [familyId, messages]); ///\\\

  const handleSendMessage = async () => {
    if (!newMessage) return;
  
    // Replace with actual message sending logic using your chat library (Socket.IO)
    const message = { content: newMessage, sender: user.name }; // Replace 'CurrentUser' with actual username
  
    try {
      const socket = io(config.apiUrl); // Replace with your server address
      socket.emit('send-message', message); // Emit message to server
      setMessages([...messages, message]); // Add message to local state for immediate UI update
      setNewMessage(''); // Clear the input field
    } catch (error) {
      console.error('Error sending message:', error); // Handle errors appropriately
    }
  };
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List dense>
          {messages.map((message) => (
            <ListItem key={message.content}>
              <ListItemText primary={message.content} secondary={message.sender} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Send a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <Button variant="contained" color="primary" onClick={handleSendMessage} disabled={!newMessage}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default FamilyChat
