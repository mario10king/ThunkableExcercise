import React, { Component } from 'react';
import ProjectAdder from './ProjectAdder';
import Projects from './Projects';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      projects: [],
      newProject: false,
      titleText: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.getDate = this.getDate.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  getDate() {
    var date = new Date();
    var dateArray = date.toString().split(' ');
    var month = dateArray[1];
    var day = dateArray[2];
    var year = dateArray[3];
    var minutes = dateArray[4].split(':')[1];
    var hours = date.getHours();
    var formattedHours = hours % 12;
    var timeSuffix = hours >= 12 ? 'pm' : 'am';
    if (formattedHours === 0) {
      formattedHours = 12;
    }
    var time = formattedHours + ':' + minutes;

    return `${month} ${day}, ${year}\u00A0\u00A0${time}${timeSuffix}`;
  }

  handleClick() {
    this.setState({ newProject: true });
  }

  handleTextChange(event) {
    this.setState({ titleText: event.target.value });
  }

  handleUpdate(event, id) {
    event.preventDefault();
    var projects = this.state.projects.map(project => {
      if (project.id === id) {
        return {
          id: project.id,
          title: this.state.titleText,
          date: project.date
        };
      }
      return project;
    });
    this.setState({ projects: projects });
  }

  handleCreate(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        projects: [
          ...prevState.projects,
          {
            id: prevState.counter,
            title: prevState.titleText,
            date: this.getDate()
          }
        ],
        counter: prevState.counter + 1,
        newProject: false,
        titleText: ''
      };
    });
  }

  handleDelete(event, id) {
    event.preventDefault();
    var projects = this.state.projects.filter(project => {
      return project.id !== id;
    });
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="content">
        <ProjectAdder handleClick={this.handleClick} />
        <Projects
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
          handleTextChange={this.handleTextChange}
          newProject={this.state.newProject}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default Content;
