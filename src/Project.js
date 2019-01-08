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
      deleteIcon: DeleteIcon,
      edit: false
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

  handleEditClick() {
    this.setState({ edit: true });
  }

  render() {
    var form = (
      <form
        onSubmit={event => {
          this.setState({ edit: false });
          this.props.handleUpdate(event, this.props.project.id);
        }}
      >
        <input
          type="text"
          onChange={this.props.handleTextChange}
          className="project-input"
          placeholder="Name your project"
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    );
    var title = (
      <div>
        <p className="project-title">{this.props.project.title}</p>
        <img
          className="edit-icon"
          onMouseEnter={() => this.handleEditHover(true)}
          onMouseLeave={() => this.handleEditHover(false)}
          onClick={() => this.handleEditClick()}
          src={this.state.editIcon}
          alt="edit"
        />
      </div>
    );

    var display = this.state.edit ? form : title;

    return (
      <div className="project">
        <img className="project-icon" src={ProjectIcon} alt="project icon"/>
        {display}
        <p className="date"> {this.props.project.date} </p>
        <img
          className="delete-icon"
          onMouseEnter={() => this.handleDeleteHover(true)}
          onMouseLeave={() => this.handleDeleteHover(false)}
          onClick={(event) => this.props.handleDelete(event, this.props.project.id)}
          src={this.state.deleteIcon}
          alt="delete"
        />
      </div>
    );
  }
}

export default Project;
