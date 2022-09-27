import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jokes from './Pages/Jokes/Jokes';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div >
    
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/jokes" element={<Jokes/>}/>

    </Routes>
   
    </div>
  );
}

export default App;
