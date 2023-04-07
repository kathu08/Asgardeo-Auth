import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    clientID: "Vu6EOjHV1cjoILcSmoHIhW1ZQxwa",
    baseUrl: "https://api.asgardeo.io/t/mypracticeorg",
    scope: ["openid", "profile"]
}

root.render(
  <AuthProvider
    config={config}
  >
    <App />
  </AuthProvider>
);
