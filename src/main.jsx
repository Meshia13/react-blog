import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme/Theme.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
