import React, { Component } from "react";
import M from "materialize-css";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import "./css/Navbar.css"


class SignedInLinks extends Component {
    
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  render() {
    return (
      <div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><NavLink to='/' className='dropdown-trigger black-text' data-target='ids'>IDs<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                 
                 
                  <li><NavLink to='/' className='dropdown-trigger black-text' data-target='config'>Configurações<i class="material-icons right">arrow_drop_down</i></NavLink></li>
              
                  <li><a className='black-text' onClick={this.props.signOut}>Log Out</a></li>
                 

                    
                    <ul id='ids' className='dropdown-content hover'>
                        <li><NavLink to='/createid'>Adicionar</NavLink></li>
                        <li><NavLink to='/'>Listar</NavLink></li>
                    </ul>
                    <ul id='config' className='dropdown-content hover'>
                        <li><NavLink to="/userdetail">Dados</NavLink></li>
                        <li><NavLink to='/colorpicker'>Personalização</NavLink></li>
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
