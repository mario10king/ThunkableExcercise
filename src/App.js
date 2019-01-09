import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import style from './App.module.css';
import Header from './Header/Header'
import Projects from './Projects/Projects'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Header/> 
        <Projects/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
