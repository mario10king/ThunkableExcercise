import React, { Component } from 'react';
import ProjectIcon from './assets/defaultProjectIcon_2x.png';
import './NewProject.css';

class NewProject extends Component {
  render() {
    return (
      <div className="project">
        <img className="project-icon" src={ProjectIcon} alt="project icon"/>
        <form onSubmit={this.props.handleCreate}>
          <input
            type="text"
            onChange={this.props.handleTextChange}
            id="project-input"
            placeholder="Name your project"
          />
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

export default NewProject;
