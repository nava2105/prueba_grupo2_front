const socket = io('http://34.231.37.159:3000');
const socket = io('http://localhost:3000');
let username;

// Función para unirse al chat
function joinChat() {

    const userInput = document.getElementById('username').value;
    if (!userInput) {
        alert('Debes elegir un espacio (Usuario1, Usuario2, Usuario3 o Usuario4).');
        return;
    }
    username = userInput;
    socket.emit('joinRoom', username);

    document.getElementById('user-selection').style.display = 'none';
    document.getElementById('chat').style.display = 'block';
}

// Enviar mensajes al servidor
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() === '') return;

    socket.emit('chatMessage', { message });
    messageInput.value = '';
}

// Mostrar historial de mensajes
socket.on('loadMessages', (messages) => {
    const messagesDiv = document.getElementById('messages');
    messages.forEach((msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.user}: ${msg.message}`;
        messagesDiv.appendChild(messageElement);
    });
});

// Escuchar nuevos mensajes
socket.on('message', (data) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${data.user}: ${data.message}`;
    messagesDiv.appendChild(messageElement);

    // Scroll automático
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Mostrar la IP del servidor
socket.on('serverIP', (data) => {
    const ipDiv = document.getElementById('server-ip');
    ipDiv.textContent = `IP del servidor: ${data.ip}`;
});

  const userInput = document.getElementById('username').value;
  if (!userInput) {
    alert('Debes elegir un espacio (Usuario1, Usuario2, Usuario3 o Usuario4).');
    return;
  }
  username = userInput;
  socket.emit('joinRoom', username);

  document.getElementById('user-selection').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
}

// Enviar mensajes
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message.trim() === '') return;

  socket.emit('chatMessage', { message });
  messageInput.value = '';
}

// Mostrar historial de mensajes al conectarse
socket.on('loadMessages', (messages) => {
  const messagesDiv = document.getElementById('messages');
  messages.forEach((msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = ${msg.user}: ${msg.message};
    messagesDiv.appendChild(messageElement);
  });
});

// Escuchar nuevos mensajes
socket.on('message', (data) => {
  const messagesDiv = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = ${data.user}: ${data.message};
  messagesDiv.appendChild(messageElement);

  // Scroll automático
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

