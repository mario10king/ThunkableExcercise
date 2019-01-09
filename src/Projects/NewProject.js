import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectIcon from '../assets/defaultProjectIcon_2x.png';
import style from './NewProject.module.css';

var NewProject = props => {
  return (
    <div className={style.project}>
      <img
        className={style['project-new-icon']}
        src={ProjectIcon}
        alt="project icon"
      />
      <form onSubmit={props.handleCreate}>
        <input
          type="text"
          onChange={props.handleTextChange}
          className={style['project-input']}
          placeholder="Name your project"
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    </div>
  );
};

NewProject.propTypes = {
  handleCreate: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default NewProject;
