import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Using createRoot from react-dom/client
import './index.css';
import App from './App.jsx';

// Use createRoot to initialize the root element
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
