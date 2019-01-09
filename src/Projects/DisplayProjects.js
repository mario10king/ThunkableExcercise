import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Project from './Project';
import NewProject from './NewProject';
import style from './DisplayProjects.module.css';

var DisplayProjects = props => {
  var projects = props.projects.map(project => {
    return (
      <Project
        key={project.id}
        handleTextChange={props.handleTextChange}
        handleUpdate={props.handleUpdate}
        handleDelete={props.handleDelete}
        handleDrop={props.handleDrop}
        project={project}
      />
    );
  });
  return (
    <div className={style["projects"]}>
      {props.newProject && (
        <NewProject
          handleTextChange={props.handleTextChange}
          handleCreate={props.handleCreate}
        />
      )}
      {projects}
    </div>
  );
}

DisplayProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
}

export default DisplayProjects;
