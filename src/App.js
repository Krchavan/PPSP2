import React from 'react';
//import './App.css';
import './../src/Componets/Home/Home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Componets/Navbar/NavBar';
import Home from './Componets/Home/Home';
import About from './Componets/About/About';
import Services from './Componets/Services/Services';
import Careers from './Componets/Careers/Careers';
import Ebook from './Componets/Ebook/Ebook';
import Contact from './Componets/Contact/Contact'
import Upcoming from './Componets/Upcoming_Event/Upcoming'
 
 


function App() {
  return (
    <div className='background'>
    

    <Router>
    <NavBar /> 
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/services' Component={Services} />
      <Route path='/careers' Component={Careers} />
      <Route path='/ebook' Component={Ebook} />
      <Route path='/contact' Component={Contact} />
      <Route path='/upcoming' Component={Upcoming} />
        
      </Routes>

    </Router>
    </div>
     



  );
}

export default App;
