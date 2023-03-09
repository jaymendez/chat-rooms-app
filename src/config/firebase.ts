import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzX9WcEN59pr9tfhlOpLFYiy0yNtGU31s',
  authDomain: 'chat-rooms-d2869.firebaseapp.com',
  projectId: 'chat-rooms-d2869',
  storageBucket: 'chat-rooms-d2869.appspot.com',
  messagingSenderId: '164246899597',
  appId: '1:164246899597:web:eb76b7fddf5254264dcbc4',
  measurementId: 'G-9V39Y8TKC3',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
