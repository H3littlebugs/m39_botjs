// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);

const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas.'
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    addMessage('user', userInput);
    document.getElementById('user-input').value = '';

    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage('bot', botResponse), 500);
}

function addMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userInput) {
    const lowercaseInput = userInput.toLowerCase();
    return responses[lowercaseInput] || 'Lo siento, no entiendo esa pregunta.';
}
