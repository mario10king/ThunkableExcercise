import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            className="project-input"
            placeholder="Name your project"
          />
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

NewProject.propTypes = {
  handleCreate: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
}

export default NewProject;
