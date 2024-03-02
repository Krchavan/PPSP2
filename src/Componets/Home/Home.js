import React from 'react'
import'./../Home/Home.css';
import  Typewriter from './Typewriter';

import SocialFollow from '../SocialFollow/SocialFollow';

import Slide from './Slide';
import Home2 from './Home2';
import Projects from '../Cardimg/Projects';






function Home() {
  const images = [
    "https://img.hotimg.com/1e42303a8369cef71.png",
    "https://img.hotimg.com/2c31a82219c31ea18.jpeg",
    "https://img.hotimg.com/3cdb83f3cfc491283.jpeg",
    "https://img.hotimg.com/43b6741855312836a.jpeg",
    "https://img.hotimg.com/5b8f0d9bbd19f0cc5.jpeg",
    "https://img.hotimg.com/61ffda7785d20a8c3.jpeg",
    "https://img.hotimg.com/77f8f87cf929cbd27.jpeg",
    "https://img.hotimg.com/83370e3d32697355c.png",
    "https://img.hotimg.com/9d1d5bf27ce10beab.png",
  ];
  return (

  
  
     <div className='homebag'>
      
      <div>
       <Slide  images={images} />
      </div>
       
       <div> </div>
      <div className='info'><h1>Intro..</h1> <h4>Pune Prashikshan Sanstha, Pune</h4> Recognized the need of competitive market so emerged in the field of Training & Development from last 15 years.<br/> Soft Skill Development Programme,
      ISO Consultation,Certification,
      Personality Development Training .
      <Typewriter />
      </div>
      
      <Home2 />
      <Projects />
      
      <div>
     <SocialFollow />
     </div>
     </div>
    
     
   
  )
  
}

export default Home
