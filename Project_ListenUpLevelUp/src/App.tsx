import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  console.log('Is authenticated', isAuthenticated);
  console.log('User', user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </>
  );
}

export default App;

// Need to add this for the image somewhere <a href="https://www.flaticon.com/free-icons/headphones" title="headphones icons">Headphones icons created by Freepik - Flaticon</a>
