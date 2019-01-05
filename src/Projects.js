import React, { Component } from 'react';
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
          handleSubmit={this.props.handleSubmit}
          project={project}
        />
      );
    });
    return (
      <div className="projects">
        {this.props.newProject && (
          <NewProject
            handleTextChange={this.props.handleTextChange}
            handleSubmit={this.props.handleSubmit}
          />
        )}
        {projects}
      </div>
    );
  }
}

export default Projects;
