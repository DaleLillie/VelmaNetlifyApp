
async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (!message) return;

    const chat = document.getElementById('chat');
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = message;
    chat.appendChild(userMsg);
    input.value = '';

    const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        body: JSON.stringify({ message }),
    });

    const data = await res.json();
    const velmaMsg = document.createElement('div');
    velmaMsg.className = 'message velma';
    velmaMsg.textContent = data.reply;
    chat.appendChild(velmaMsg);
}
