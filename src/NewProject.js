import React, {Component} from 'react';
import ProjectIcon from "./assets/defaultProjectIcon_2x.png";
import './NewProject.css';

class NewProject extends Component {
  render() {
    return ( 
      <div className="project">
        <img className="project-icon" src={ProjectIcon}/>
        <input type='text' id='project-input' placeholder='Name your project'/>
      </div>
    )
  }
}

export default NewProject;
