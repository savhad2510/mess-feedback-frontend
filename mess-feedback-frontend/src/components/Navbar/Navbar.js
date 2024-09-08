import React from 'react';
import logoImage from './logo.png'; // Assuming the file name is "logo.png"
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img className='logo' src={logoImage} alt="Logo" />
        <div className='sinhgad'>
          <h1>Sinhgad Technical Education Society's<br />Mess Feedback System</h1>
          
        </div>
       
      </div>
      
    </nav>
  );
}

export default Navbar;



