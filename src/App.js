import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Messages from './components/Messages';
import Products from './components/Products';
import Reports from './components/Reports';
import Team from './components/Team';
import Support from './components/Support';

function App() {
  return (
    <div className="App">
      < Navbar />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Messages' element={<Messages />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/Reports' element={<Reports />}/>
          <Route path='/Team' element={<Team />}/>
          <Route path='/Support' element={<Support />}/> 
        </Routes>
    </div>
  );
}

export default App;
