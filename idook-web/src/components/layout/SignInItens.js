import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
import { connect } from 'react-redux';

import "./css/Navbar.css"



class SignedInItens extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    const { auth } = this.props;
    //console.log(auth)
    //const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    //const menus = auth.uid ? <SignedInMenu /> : <SignedOutLinks />;
    return (
      <div>
        <nav className="grey lighten-5">
          <div className="container nav-wrapper grey lighten-5">
          <Link to='/' data-target="slide-out" className='sidenav-trigger show-on-large black-text'><i className="material-icons">menu</i></Link>              
            <Link to="/"className="brand-logo black-text text-darken-2" >IDook</Link>
            <SignedInLinks />          
          </div>
        </nav>
        <SignedInMenu/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps )(SignedInItens)
