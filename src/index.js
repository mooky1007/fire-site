import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYGGjuU8XgznvNyvputV11HizaF7KzNHc",
  authDomain: "my-first-firebase-7761e.firebaseapp.com",
  databaseURL: "https://my-first-firebase-7761e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-first-firebase-7761e",
  storageBucket: "my-first-firebase-7761e.appspot.com",
  messagingSenderId: "368086354740",
  appId: "1:368086354740:web:154fab71849c4d8edb7361"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);