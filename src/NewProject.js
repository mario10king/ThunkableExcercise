import React, { Component } from 'react';
import ProjectIcon from './assets/defaultProjectIcon_2x.png';
import './NewProject.css';

class NewProject extends Component {
  render() {
    return (
      <div className="project">
        <img className="project-icon" src={ProjectIcon} />
        <form onSubmit={this.props.handleSubmit}>
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
