const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatBtn = document.getElementById("chat-btn");

const API_URL = 'http://localhost:4000/api/chatbot';

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = text;
    msgDiv.className = sender === 'user' ? 'message-user' : 'message-bot';
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendChat() {
    const message = chatInput.value.trim().toLowerCase();

    if (!message) {
        alert("Please enter a message");
        return;
    }

    appendMessage(message, 'user');
    chatInput.value = '';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();
        appendMessage(data.reply || "Sorry, I didn't understand that 🤔", 'bot');
    } catch (err) {
        console.error(err);
        appendMessage("Error: Could not connect to the server.", 'bot');
    }
}

chatBtn.addEventListener('click', sendChat);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChat();
});
