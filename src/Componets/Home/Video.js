import React from 'react'
import './../Home/Video.css';
import sample from './../Asset/Video.mp4';

function Video() {
  return (
    <div>
   <video className='background-video' loop autoplay='' muted >
    <source src={sample} type='video/mp4' />
  </video>  
    </div>
  )
}

export default Video
