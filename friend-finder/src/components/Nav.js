// Colin and Luis

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
    return (
        
      
        <nav>
         
        <Link to="/">Sign Up</Link>
        
        <Link to="/login">Login</Link>
        
        <Link to="/profile">Profile</Link>

        <Link to="/messages">Messages</Link>

        <Link to="/friends">Friends</Link>
        
        
        </nav>
       
       
      
    );
  }
  