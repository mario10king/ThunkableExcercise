import React, { Component } from 'react';
import logo from '../assets/ThunkableBeaver.png'
import style from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={style["App-header"]}>
        <img src={logo} className={style["App-logo"]} alt="logo" />
        <h1 className={style.title}> MY PROJECTS </h1>
      </header>
    )
  }
}

export default Header;
