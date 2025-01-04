import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add a console.log to debug
console.log('Main.jsx is running')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)