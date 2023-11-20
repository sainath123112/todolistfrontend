import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextContainer from './contextcontainer/ContextContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextContainer>
      <App />
   </ContextContainer>
  </React.StrictMode>,
)
