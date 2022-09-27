import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jokes from './Pages/Jokes/Jokes';
import Login from './Pages/Login/Login';
import Welcome from './Pages/Welcome/Welcome';

function App() {
  return (
    <div >
    
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/jokes" element={<Jokes/>}/>
      <Route path="/welcome" element={<Welcome/>}/>

    </Routes>
   
    </div>
  );
}

export default App;
