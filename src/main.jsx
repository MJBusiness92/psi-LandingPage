import { StrictMode } from 'react'
 import ReactDOM from 'react-dom/client'
//import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utiliza apenas 'ReactDOM.createRoot'

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   
// )
