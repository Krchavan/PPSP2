import React from "react";
import './../SocialFollow/SocialFollow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/@anillatake5984"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/PunePrashikshan/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/latakem" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/puneprashikshansanstha/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <div className="contact">
       <h6>Contact:</h6>
       <li>Phone:+919881714157 / 09730714157</li>
       <li>Email:puneprashikshan1@gmail.com</li>
       <h6>Address:</h6>
       <ul>09,Anand Corner Building, Near Anand Park Bus Stop,<br/>
       Wadgaonsheri,Pune-411014
       </ul>
       </div>
       </div>

  );
}