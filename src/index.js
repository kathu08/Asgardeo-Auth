import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider, SecureApp } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
    signInRedirectURL: "http://localhost:3000/login",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "frDVK7LFSkJkhLGLYodbdbLUns4a",
    baseUrl: "https://api.asgardeo.io/t/mypracticeorg",
    scope: ["openid", "profile"]
}

root.render(
  <AuthProvider
    config={config}
  >
    <SecureApp>
        <App />
    </SecureApp>
  </AuthProvider>
);
