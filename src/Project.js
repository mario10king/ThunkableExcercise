import React, { Component } from 'react';
import ProjectIcon from './assets/defaultProjectIcon_2x.png';
import DeleteIcon from './assets/DeleteIcon.svg';
import DeleteIconHover from './assets/DeleteIcon_Hover.svg';
import EditIcon from './assets/EditIcon.svg';
import EditIconHover from './assets/EditIcon_Hover.svg';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editIcon: EditIcon,
      deleteIcon: DeleteIcon
    };

    this.handleEditHover = this.handleEditHover.bind(this);
    this.handleDeleteHover = this.handleDeleteHover.bind(this);
  }

  handleEditHover(hovering) {
    var icon = hovering ? EditIconHover : EditIcon;
    this.setState({ editIcon: icon });
  }

  handleDeleteHover(hovering) {
    var icon = hovering ? DeleteIconHover : DeleteIcon;
    this.setState({ deleteIcon: icon });
  }

  handleEditClick() {}

  render() {
    return (
      <div className="project">
        <img className="project-icon" src={ProjectIcon} />
        <p className="project-title">{this.props.project.title}</p>
        <img
          className="edit-icon"
          onMouseEnter={() => this.handleEditHover(true)}
          onMouseLeave={() => this.handleEditHover(false)}
          src={this.state.editIcon}
        />
        <p className="date"> {this.props.project.date} </p>
        <img
          className="delete-icon"
          onMouseEnter={() => this.handleDeleteHover(true)}
          onMouseLeave={() => this.handleDeleteHover(false)}
          src={this.state.deleteIcon}
        />
      </div>
    );
  }
}

export default Project;
