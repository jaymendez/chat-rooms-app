# Chat Rooms App

<div align="center">
  <h2>🔥 nextjs-chat-app</h2>
  <p> LIVE DEMO: https://next-chat-room.vercel.app </p>
  <p>a practice Chat Room app made with Next.js, Firebase and Tailwind</p>
  <p>Made by Jay Mendez</p>
</div>

## Features

- Google Login
- Join Active Channels
- Leave Channel
- Real time messaging
- Real time notifications for new messages
- Mobile Responsive!

## Improvements

- Auth0 for Login
- Improve Notifications
- Create your own channel
- Delete message
- Edit message

## Getting Started

### 1. Clone this repository:

![Clone](https://user-images.githubusercontent.com/28770143/224444061-7e1adc8d-3e81-4a63-8ef7-5f45a0683c09.png)


### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Setup and configure your firebase

1. Follow this link in order to create a firebase project 👉 https://firebase.google.com/docs/web/setup#create-project
2. Copy your firebase config and Add it sample.env and rename to .env
3. Enable authentication for google on firebase
![image](https://user-images.githubusercontent.com/28770143/224446881-6731d17e-fa65-4081-b1e7-c8469a82ad96.png)

4. Configure your firestore rules, copy the rules below and paste it on your rules.

```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
    
    match /messages/{docId} {
    	allow read: if request.auth.uid != null
    	allow create: if canCreateMessage();
    }
    
    function canCreateMessage() {
    	let isSignedIn = request.auth.uid != null;
    	let isOwner = request.auth.uid == request.resource.data.uid;
    
    	return isSignedIn && isOwner;
    }
  }
}
```

![image](https://user-images.githubusercontent.com/28770143/224444254-95b1a1b7-6bc1-4f50-8535-23f06ca39484.png)

### 5. Run the development server

```bash
yarn run dev
```
