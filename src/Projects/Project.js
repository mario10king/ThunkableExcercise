import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'
import ProjectIcon from '../assets/defaultProjectIcon_2x.png';
import DeleteIcon from '../assets/DeleteIcon.svg';
import DeleteIconHover from '../assets/DeleteIcon_Hover.svg';
import EditIcon from '../assets/EditIcon.svg';
import EditIconHover from '../assets/EditIcon_Hover.svg';
import style from './Project.module.css';

const Types = {
  PROJECT: 'project',
};

const projectSource = {
  beginDrag(props) {
    return {
      id: props.project.id 
    }  
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const projectTarget = {
  drop(props, monitor) {
    var sourceId = monitor.getItem().id
    var targetId = props.project.id

    props.handleDrop(sourceId, targetId)
  }
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

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
    const { connectDragSource, connectDropTarget, isDragging } = this.props;

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
          className={style["project-input"]}
          placeholder="Name your project"
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    );
    var title = (
      <div>
        <p className={style["project-title"]}>{this.props.project.title}</p>
        <img
          className={style["edit-icon"]}
          onMouseEnter={() => this.handleEditHover(true)}
          onMouseLeave={() => this.handleEditHover(false)}
          onClick={() => this.handleEditClick()}
          src={this.state.editIcon}
          alt="edit"
        />
      </div>
    );
    var display = this.state.edit ? form : title;
    var draggingStyle = isDragging ? {visibility: 'hidden'} : {};

    return connectDropTarget(connectDragSource(
      <div className={style["project"]} style={draggingStyle}>
        <img className={style["project-icon"]} src={ProjectIcon} alt="project icon"/>
        {display}
        <p className={style["date"]}> {this.props.project.date} </p>
        <img
          className={style["delete-icon"]}
          onMouseEnter={() => this.handleDeleteHover(true)}
          onMouseLeave={() => this.handleDeleteHover(false)}
          onClick={(event) => this.props.handleDelete(event, this.props.project.id)}
          src={this.state.deleteIcon}
          alt="delete"
        />
      </div>
    ));
  }
}

Project.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.func.isRequired
}
export default DropTarget(Types.PROJECT, projectTarget, collectTarget)(DragSource(Types.PROJECT, projectSource, collectSource)(Project));
