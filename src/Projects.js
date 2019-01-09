import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Project from './Project';
import NewProject from './NewProject';
import './Projects.css';

class Projects extends Component {
  render() {
    var projects = this.props.projects.map(project => {
      return (
        <Project
          key={project.id}
          handleTextChange={this.props.handleTextChange}
          handleUpdate={this.props.handleUpdate}
          handleDelete={this.props.handleDelete}
          handleDrop={this.props.handleDrop}
          project={project}
        />
      );
    });
    return (
      <div className="projects">
        {this.props.newProject && (
          <NewProject
            handleTextChange={this.props.handleTextChange}
            handleCreate={this.props.handleCreate}
          />
        )}
        {projects}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
}

export default Projects;
