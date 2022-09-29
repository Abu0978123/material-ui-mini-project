// import { createContext } from 'react';
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Box, Stack} from '@mui/system';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import AddIconn from './components/AddIconn';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
// import HomeContainer from './redux/containers/HomeContainer';
// import Home from './components/Home';
// import Context from './for-context-api/Context';
// const fname =  createContext();
// const lname =  createContext();
function App() {
 const [mode, setMode]= useState('light');
  const DarkMode = createTheme({
    palette:{
      mode: mode,
    }
  })

  return (
  
     
    <ThemeProvider theme={DarkMode}>
    <Box bgcolor={"background.default"} color="text.primary">
    <NavBar/>
    <Stack direction={'row'} spacing={2} justifyContent='center'>
    <SideBar setMode={setMode} mode={mode}/>
    <Feed/>
    <RightBar/>
    
    </Stack>
    <AddIconn/>
    </Box>
    </ThemeProvider>
    
   
   );
}

export default App;
// export {lname, fname};
