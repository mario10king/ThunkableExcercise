import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import style from './App.module.css';
import Header from './Header'
import Content from './Content'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Header/> 
        <Content/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
