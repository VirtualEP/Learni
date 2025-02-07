import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContextProvider from './context/Auth'
import { Toaster } from 'react-hot-toast'
import ReactEncrypt from 'react-encrypt';

export const encryptKey = import.meta.env.VITE_ENCRYPT_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContextProvider>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </AuthContextProvider>
  </React.StrictMode>
)
