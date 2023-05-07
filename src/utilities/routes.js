import Contacts from 'pages/ContactsPage';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import NotFound from 'pages/NotFound';
import Register from 'pages/SingUpPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="contacts" element={<Contacts />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />   
    </Route>
  )
);
