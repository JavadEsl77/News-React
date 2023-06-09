import React from 'react';
import './App.css';
import MainPage from "./commponents/MainPage";
import { lightTheme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={lightTheme}>
     <MainPage/>
        </ThemeProvider>
    </div>
  );
}

export default App;
