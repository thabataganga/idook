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
          <li><NavLink className='teal-text lighten-1'  to='/signin'> <i class="material-icons left">account_circle</i>Login</NavLink></li>      
          <li><NavLink className='black-text'  to='/contato'><button className="btn z-depth-0">Testar</button></NavLink></li>
      </ul>

      </div>
        
    );
  }
}

export default SignedOutLinks;
