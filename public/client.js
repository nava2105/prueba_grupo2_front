const socket = io('http://localhost:3000'); // URL del servidor backend
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

    // Ocultar selección y mostrar chat
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

// Escuchar mensajes del servidor
socket.on('message', (data) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${data.user}: ${data.message}`;
    messagesDiv.appendChild(messageElement);

    // Scroll automático
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
