import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import "./css/Navbar.css";

import ClientLogo from "../../assets/sindpd.png";

class SignedInMenu extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="https://elements-cover-images-0.imgix.net/386f6039-5d38-4f48-ace5-16145e58d20f?auto=compress%2Cformat&fit=max&w=710&s=da4f8cfd9edba101af54c0d33aa1217a" />
            </div>
            <a href="#user">
              <img class="circle" src={ClientLogo} />
            </a>
            <a href="#name">
              <span className="white-text name">SindPD</span>
            </a>
            <a href="https://www.sindpd.org.br">
              <span className="white-text email">www.sindpd.org.br</span>
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
              <i className="material-icons">filter_drama</i>ID
            </div>
            <div className="collapsible-body">
              <li><NavLink to='/createid'>Adicionar</NavLink></li>
              <li>
                <a href="#!">Editar</a>
              </li>
              <li>
                <a href="#!">Listar</a>
              </li>
              <li><a href="#!">Buscar</a></li>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Noticias
            </div>
            <div className="collapsible-body">
            <li><NavLink to='/createnews'>Adicionar</NavLink></li>
              <li>
                <a href="#!">Editar</a>
              </li>
              <li>
                <a href="#!">Listar</a>
              </li>
              <li><a href="#!">Buscar</a></li>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Agenda
            </div>
            <div className="collapsible-body">
            <li><NavLink to='/createcalendar'>Adicionar</NavLink></li>
              <li>
                <a href="#!">Editar</a>
              </li>
              <li>
                <a href="#!">Listar</a>
              </li>
              <li><a href="#!">Buscar</a></li>
            </div>
          </li>
        </ul>

        <li>
          <div className="divider"></div>
        </li>

        <li>
          <NavLink to="/" className="waves-effect">
            Configurações
          </NavLink>
        </li>
        <li><a className='black-text' onClick={this.props.signOut}>Log Out</a></li>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInMenu)

