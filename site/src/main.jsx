import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.css';

const fallbackRoute = new URLSearchParams(window.location.search).get('route');
if (fallbackRoute) window.history.replaceState(null, '', fallbackRoute);

createRoot(document.getElementById('root')).render(<StrictMode><BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter></StrictMode>);
