import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { useDispatch } from 'react-redux';
import carData from './carInfo.json';
import { setCarDetails } from './features/car/carSlice';
function App() {

  return (<div>
      <Header/>
      <Home/>
      </div>);
}

export default App;
