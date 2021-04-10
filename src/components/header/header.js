// ESLint Validated

import React, { Component } from 'react';
import logo from './logo.png';


import {
  NavLink
} from 'react-router-dom';

//style
import "../../style/header.css";



class Header extends Component {

  render() {
    return (
      <div className="headergrid">
        <NavLink className='logo' to='/Home'><img className='logo' src={logo} alt='logo'></img></NavLink>
        <nav>
          <NavLink className='link' to='/Home'>Home</NavLink>
          <NavLink className="link" to='/NoteTable'>Notes</NavLink>
          <NavLink className='link' to='/Survey'>Survey</NavLink>
          <NavLink className='link' to='/Detailmap'>Detailmap</NavLink>
          <NavLink className='link' to='/loginmain'>Signup/Login</NavLink>
          <NavLink className='link' to='/apiPage'>API to Backend</NavLink>

        </nav>
      </div>
    );
  }
}


export default Header;