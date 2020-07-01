import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import "./css/Navbar.css"


class SignedOutMenu extends Component {
  render() {
    return (
        <div>
          <li>
          <div className="user-view">
            <div className="background">
              <img alt="cover" src="https://elements-cover-images-0.imgix.net/386f6039-5d38-4f48-ace5-16145e58d20f?auto=compress%2Cformat&fit=max&w=710&s=da4f8cfd9edba101af54c0d33aa1217a" />
            </div>
            
            <a href="#name">
              <span className="white-text name">Idook</span>
            </a>
            <a href="https://www.sindpd.org.br">
              <span className="white-text email">Seu ID Digital</span>
            </a>
          </div>
        </li>

        <li><NavLink to='/'><i className="material-icons">cloud</i>Institucional</NavLink></li>
        <li><NavLink to='/'><i className="material-icons">cloud</i>Produtos</NavLink></li>
        <li><NavLink to='/'><i className="material-icons">cloud</i>Segmentos</NavLink></li>
        <li><NavLink to='/contato'><i className="material-icons">cloud</i>Contato</NavLink></li>

        <li>
          <div className="divider"></div>
        </li>

        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
     
        </div>

    );
  }
}

export default SignedOutMenu;
