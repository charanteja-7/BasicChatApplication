# Basic Chat Application

## Overview

This project is a simple web-based chat application that connects to Firebase for real-time messaging. It allows users to send and receive messages in real-time using HTML, CSS, and JavaScript.

## Features

- **Real-time Messaging:** Send and receive messages instantly.
- **User Interface:** Simple and clean chat interface built with HTML and CSS.

## Technologies Used

- **HTML:** For structuring the chat application.
- **CSS:** For styling the chat application.
- **JavaScript:** For handling the chat logic and interactions.
- **Firebase:** For real-time database..

## Getting Started

### Prerequisites

- Basic understanding of HTML, CSS, and JavaScript.
- A Firebase account for configuring authentication and database.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/charanteja-7/BasicChatApplication.git.
   ```

2. **Set Up Firebase:**

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Add a web app to your Firebase project and obtain your Firebase configuration credentials.

3. **Configure Firebase:**

   Create a `index.js` file in the src directory and add your Firebase configuration:

   ```javascript
   // firebase-config.js
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   ```



### Usage

1. **Open the Application:**

   Open the `index.html` file in a web browser.

2. **Start Chatting:**

   - Users can enter their messages and see them appear in real-time.
   - Messages are stored and synchronized via Firebase.
