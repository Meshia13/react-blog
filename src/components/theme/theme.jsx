// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#B89957'},
    secondary: { main: '#ff4081' },
    // Make adjustments
    // background: {default: "#B89957", paper: "#B89957" }, 
    text: {}
  },
  background :{
    default: '#795548',
    
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '1rem', fontWeight: "bold"},
    h2: {},
    h3: {}
  },
});

export default theme;
