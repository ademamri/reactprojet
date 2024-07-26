import logo from './logo.svg';
import './App.css';
import Listecar from './components/Listecar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Modal from './components/Modal';
import Card from'./components/Card';
import { Route, Router, Routes } from 'react-router-dom';
import Bycar from './components/Bycar';
import Sellcar from './components/Sellcar';
import Login from './components/Login';
import Add from './components/Add';
function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Login/>}/>
<Route path='/home' element={<Home/>}/>
  <Route path='/bycar' element={<Bycar/>}/>
  <Route path='/sellcar' element={<Sellcar/>}/>
  <Route path='/addaccount' element={<Add/>}/>
</Routes>
    </div>
  );
}

export default App;
