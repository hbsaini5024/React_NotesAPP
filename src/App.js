import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import Home from './components/Home';
import UpdateNote from './components/UpdateNote';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<CreateNote/>}/>
        <Route path='/edit/:id' element={<UpdateNote/>}/>
      </Routes>
    </div>
  );
}

export default App;
