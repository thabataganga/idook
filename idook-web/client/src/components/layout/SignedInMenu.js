import React, { Component, Profiler } from "react";

import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import "./css/Navbar.css";

import ClientLogo from "../../assets/sindpd.png";

class SignedInMenu extends Component {
  

  render() {

    const {profile} = this.props;

    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://elements-cover-images-0.imgix.net/386f6039-5d38-4f48-ace5-16145e58d20f?auto=compress%2Cformat&fit=max&w=710&s=da4f8cfd9edba101af54c0d33aa1217a" />
            </div>
            <a href="#user">
              <img class="circle centermenu" object-fit='cover' src={profile.url} />
            </a>
            <a href="#name">
              <span className="white-text name">{profile.socialreason}</span>
            </a>
            <a href={profile.site}>
              <span className="white-text email">{profile.site}</span>
            </a>
          </div>
        </li>

        <li>
          <NavLink to="/" className="waves-effect">
            Dashboard
          </NavLink>
        </li>

        <li>
          <div className="divider"></div>
        </li>

        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">contacts</i>ID
            </div>
            <div className="collapsible-body">
              <li><NavLink to='/createid'>Adicionar</NavLink></li>
              <li>
              <NavLink to='/'>Listar</NavLink>
              </li>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">settings</i>Configurações
            </div>
            <div className="collapsible-body">
            <li><NavLink to='/userdetail'>Dados</NavLink></li>
              <li>
              <NavLink to='/colorpicker'>Personalização</NavLink>
              </li>

            </div>
          </li>
        </ul>

        <li>
          <div className="divider"></div>
        </li>

        
        <li><a className='black-text' onClick={this.props.signOut}>Log Out</a></li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInMenu)