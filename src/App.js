import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Products from './pages/Products';
import Reviews from './pages/Reviews';
import Team from './pages/Team';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div>
      < Navbar />
        <Routes>
            <Route path='/*' index element={<Home />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Reviews' element={<Reviews />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/Support' element={<Support />} /> 
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
