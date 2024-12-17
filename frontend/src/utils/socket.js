import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');  // Change to your backend URL

// Connect to server
socket.on('connect', () => {
  console.log('Connected to socket server');
});

// Emit events or handle incoming messages here
export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};

export const listenForMessages = (callback) => {
  socket.on('message', callback);
};

export default socket;
