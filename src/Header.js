import React, { Component } from 'react';
import logo from './assets/ThunkableBeaver.png'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title"> MY PROJECTS </h1>
      </header>
    )
  }
}

export default Header;
