const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const handleOutGoingChat = () =>{
    userText = chatInput.value;
    console.log(userText);
};

sendButton.addEventListener("click", handleOutGoingChat);