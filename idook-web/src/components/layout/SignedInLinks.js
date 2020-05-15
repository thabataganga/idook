import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import "./css/Navbar.css"

import ClientLogo from '../../assets/sindpd.png'


class SignedInLinks extends Component {
    
        componentDidMount() {
          const M = window.M;
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
          });
        }

  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to='/' className='black-text'>Dashboard</NavLink></li>
                  <li><NavLink to='/' className='dropdown-trigger black-text' data-target='ids'>IDs</NavLink></li>
                  <li><NavLink to='/' className='dropdown-trigger black-text' data-target='news'>Noticias</NavLink></li>
                  <li><NavLink to='/' className='dropdown-trigger black-text' data-target='calendars'>Agenda</NavLink></li>
                  <li><NavLink to='/' className='black-text' >Configurações</NavLink></li>
              
                  <li><a className='black-text' onClick={this.props.signOut}>Log Out</a></li>
                  <li><NavLink to='/' className='btn btn-floating blue lighten-1 black-text'>SindPD</NavLink></li>

                    
                    <ul id='ids' className='dropdown-content hover'>
                        <li><NavLink to='/createid'>Adicionar</NavLink></li>
                        <li><a href="#!">Editar</a></li>
                        <li><a href="#!">Listar</a></li>
                        <li><a href="#!">Buscar</a></li>
                    </ul>
                    
                    <ul id='news' className='dropdown-content hover'>
                        <li><NavLink to='/createnews'>Adicionar</NavLink></li>
                        <li><a href="#!">Editar</a></li>
                        <li><a href="#!">Listar</a></li>
                        <li><a href="#!">Buscar</a></li>
                    </ul>

                    <ul id='calendars' className='dropdown-content hover'>
                        <li><NavLink to='/createcalendar'>Adicionar</NavLink></li>
                        <li><a href="#!">Editar</a></li>
                        <li><a href="#!">Listar</a></li>
                        <li><a href="#!">Buscar</a></li>
                    </ul>
                
                    
                  
              </ul>

      </div>
        
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
