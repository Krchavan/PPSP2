import React, { useState } from "react";
import logo from './../Asset/logo.png';
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {HamburgetMenuOpen,HamburgetMenuClose} from '../Navbar/Icons';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
     <nav className="navbar">
     
      
     
        <div className="nav-container">
          <NavLink exact to="/" className="navlogo">
            {/* <i className="fas fa-code"></i> */}
            <img src={logo}  alt="logo"  width={70} height={70}/>
            <span className="icon">
           </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/carrers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Careers
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/ebook"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                E-book
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

      <li className='nav-item'>
      <NavLink
                exact
                to="/upcoming"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <button className="btn btn-warning" type="submit">Upcoming Event</button>
              </NavLink>
              </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
