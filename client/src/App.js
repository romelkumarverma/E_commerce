//import logo from './logo.svg';
//import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails'
import { Routes, Route } from 'react-router-dom';
import Success from './components/Success';
import Cancel from './components/Cancel';
//import toast, { Toaster } from 'react-router-dom';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
      {/* <Toaster />  */}
    </>
  );
}

export default App;
