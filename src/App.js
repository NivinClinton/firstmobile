import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jokes from './Pages/Jokes/Jokes';
import Login from './Pages/Login/Login';
import Welcome from './Pages/Welcome/Welcome';
import { useContext, useState } from 'react';
import { AuthContext } from './Context/UserContext';


function App() {
  // const { currentUser, setCurrentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children
  // };

  return (
    <div >


      <Routes>
        <Route path='/jokes' element={
          localStorage.getItem('isUser') &&
          <Jokes />
        }
        />
        <Route path='/welcome' element={

          localStorage.getItem('isUser') &&
          <Welcome />


        }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />


      </Routes>

    </div>
  );
}

export default App;
