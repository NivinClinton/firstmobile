import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jokes from './Pages/Jokes/Jokes';
import Login from './Pages/Login/Login';
import Welcome from './Pages/Welcome/Welcome';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from './store';
import { useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div >


      <Routes>
        {!isLoggedIn ? (
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        ) : (
          <>
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/welcome" element={<Welcome />} />

          </>
        )}
{/* 
        {isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}

        <Route path="/jokes" element={<Jokes />} />
        <Route path="/welcome" element={<Welcome />} /> */}




      </Routes>

    </div>
  );
}

export default App;
