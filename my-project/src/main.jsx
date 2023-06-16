import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './assets/css/home/index.css';
import { ServicesProvider } from './pages/Services/hooks/services-context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesProvider>
      <App />
    </ServicesProvider>
  </React.StrictMode>
);
