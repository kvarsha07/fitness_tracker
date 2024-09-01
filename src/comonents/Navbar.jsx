import React, { useState } from 'react';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Handle logout logic
      setIsLoggedIn(false); // Update state or call logout function
    } else {
      // Redirect to login page
      window.location.href = '/signIn';
    }
  };

  return (
    <div className="navbar">
      <nav>
        <div className="navbar-logo">
          <SportsGymnasticsIcon sx={{ color: 'black', fontSize: '2.5rem' }} />
          <span className="navbar-title">FITNESSTRAKER</span>
        </div>
        <ul className="navbar-menu">
        <li><Link to='/'>HOME</Link></li>
          <li><Link to='/work'>WORKOUTS</Link></li>
          <li><Link to='/dash'>DASHBOARD</Link></li>
          <li><Link to='/about'>ABOUT US</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
        <div className="navbar-login">
          <Button variant="contained" onClick={handleAuthClick}>
            {isLoggedIn ? 'LogOut' : 'LogIn'}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
