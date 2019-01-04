import React, { Component } from 'react';
import ProjectAdder from './ProjectAdder';
import Projects from './Projects';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Projects: [{name: 'dog'}]
    }
    this.handleClick = this.handleClick.bind(this) 
  }

  handleClick() {
    this.setState(function(prevState) {
      return {Projects: [...prevState.Projects, {name: 'foo'}]}
    })
  }

  render() {
    return (
      <div>
        <ProjectAdder handleClick={this.handleClick}/>
        <Projects projects={this.state.Projects}/>
      </div>
    )
  }
}

export default Content;
