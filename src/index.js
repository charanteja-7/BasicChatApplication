  import { initializeApp } from "firebase/app";
  import {
    collection,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    addDoc,
    serverTimestamp,
  } from "firebase/firestore";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBqu-T57HMXuM2mtgeAC-DE8dN-7_7u8bg",
    authDomain: "chatapplication-ac555.firebaseapp.com",
    projectId: "chatapplication-ac555",
    storageBucket: "chatapplication-ac555.appspot.com",
    messagingSenderId: "1087360256957",
    appId: "1:1087360256957:web:3a6962141a87c6a47520d4"
  };

  // Initialize Firebase app
  initializeApp(firebaseConfig);

  // Get Firestore instance
  const db = getFirestore();

  // Prompt user for username
  const username = prompt("Please tell us your username");

  // Reference to the 'messages' collection
  const colRef = collection(db, "messages");

  // Query to order messages by timestamp
  const q = query(colRef, orderBy("createdAt"));
  const messages = [];



  // Listen for changes in the 'messages' collection
onSnapshot(q, (snapshot) => {
  const chatMessages = document.querySelector('.chatmessages');
  const shouldScrollToBottom = chatMessages.scrollTop + chatMessages.clientHeight === chatMessages.scrollHeight;

  messages.length = 0;
  chatMessages.innerHTML = '';

  snapshot.docs.forEach((doc) => {
    const messageData = doc.data();
    const isCurrentUser = messageData.username === username;
    messages.push({ ...doc.data(), id: doc.id,isCurrentUser });
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-element');
    messageContainer.classList.add(isCurrentUser ? 'current-user' : 'other-user');
    messageElement.innerHTML = `<span style="color:red">${messageData.username}</span>: ${messageData.message}`;
    messageContainer.appendChild(messageElement);
    chatMessages.appendChild(messageContainer);
  });

  if (shouldScrollToBottom) {
    scrollToBottom();
  }
});

 
  // Add event listener for message submission
  const addMessageForm = document.querySelector(".add");
  addMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addDoc(colRef, {
      username: username,
      message: addMessageForm.message.value,
      createdAt: serverTimestamp(),
    }).then(() => {
      addMessageForm.reset();
      scrollToBottom(); // Scroll to bottom after adding a new message
    });
  });

  // Function to scroll to the bottom of the chat messages
  function scrollToBottom() {
    const chatMessages = document.querySelector('.chatmessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
