import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

 function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
    <nav>
     <h2>Logo</h2>
     <ul className="nav-links">
        
        <Link to='/about' style={navStyle}>
            <li>About</li>
        </Link>
        <Link to='/home' style={navStyle}>
            <li>Contact</li>
        </Link>
     </ul>
    </nav>
  );
}
export default Nav;