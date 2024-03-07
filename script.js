const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const body = document.body;
const notification = document.getElementById("notification");

form.addEventListener('submit', (e) => {

    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});



addEventListener("load", () => {
    const username = prompt("Welcome mate, please enter a username :)")
    socket.emit("username", username)

})





socket.on('chat message', (msg) => {

    console.log(socket);
    const chat_message = document.createElement('li');
    const nickname = document.createElement('p');
    const message = document.createElement('p');

    console.log(msg);

    nickname.textContent = msg.nickname;
    nickname.classList.add("font-bold", "mr-2")
    chat_message.classList.add("flex")
    message.textContent = msg.message;

    console.log(nickname, message)

    chat_message.appendChild(nickname);
    chat_message.appendChild(message);
    messages.appendChild(chat_message);
    window.scrollTo(0, document.body.scrollHeight);
})








