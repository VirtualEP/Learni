import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContextProvider from './context/Auth'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthContextProvider>
  </React.StrictMode>
)
