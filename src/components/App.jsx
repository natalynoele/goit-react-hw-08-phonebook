
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import Register from 'pages/SingUpPage';
import Contacts from 'pages/ContactsPage';
import { ThemeProvider } from '@mui/material';
import { customTheme } from 'utilities/theme';


const App = () => {

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppBar />        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Home/>} />
          </Routes>
          <ToastContainer />        
      </ThemeProvider>
    </>
  );
};

export default App;
