import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação correta para React 18
import './index.css';
import App from './App';

// Seleciona o elemento root
const container = document.getElementById('root');

// Cria a raiz da aplicação
const root = createRoot(container);

// Renderiza o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);