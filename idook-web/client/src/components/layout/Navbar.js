import React, { Component } from "react";
import M from "materialize-css";
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import Logo from './logo.png'

import "./css/Navbar.css"


class Navbar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

  render() {
    const { auth, profile } = this.props;
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    const menus = auth.uid ? <SignedInMenu profile={profile} /> : <SignedOutMenu />;
    return (
      <div>
        <div className="navbar-fixed">
        <nav className="grey lighten-5">
          <div className="container nav-wrapper grey lighten-5">
          <Link to='/' data-target="slide-out" className='sidenav-trigger black-text'><i className="material-icons">menu</i></Link>              
            <Link to="/"className="brand-logo black-text text-darken-2">
            <img alt="logo" class="brand-logo" src={Logo}/>
             
              
              </Link>
            {auth.isLoaded && links}
          </div>
        </nav>
        </div>
        <ul id="slide-out" className="sidenav">
        {auth.isLoaded && menus}


        </ul>
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

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(Navbar);
