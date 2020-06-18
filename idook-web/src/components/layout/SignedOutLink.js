import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import "./css/Navbar.css"


class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink className='black-text' to='/'>Institucional</NavLink></li>
          <li><NavLink className='black-text'  to='/'>Produtos</NavLink></li>
          <li><NavLink className='black-text'  to='/'>Segmentos</NavLink></li>
          <li><NavLink className='black-text'  to='/'>Contato</NavLink></li>
          <li><NavLink className='black-text'  to='/signup'>Sign Up</NavLink></li>
          <li><NavLink className='black-text'  to='/signin'>Sign In</NavLink></li>      
      </ul>

      </div>
        
    );
  }
}

export default SignedOutLinks;
