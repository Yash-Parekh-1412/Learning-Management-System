import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom';

import LoginPage from './Pages/loginPage';

import { useMemo } from 'react';
import {useSelector} from 'react-redux';
import {CssBaseline,ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
function App() {

  const mode="dark";
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </ThemeProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
