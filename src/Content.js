import React, { Component } from 'react';
import ProjectAdder from './ProjectAdder';
import Projects from './Projects';
import NewProject from './NewProject';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate() {
    var date = new Date();
    var dateArray = date.toString().split(" ")
    var month = dateArray[1]
    var day = dateArray[2]
    var year = dateArray[3]
    var minutes = dateArray[4].split(":")[1]
    var hours = date.getHours();
    var time = hours % 12 + ":" + minutes
    var timeSuffix = hours >= 12 ? 'pm' : 'am' 

    return `${month} ${day}, ${year}\u00A0\u00A0${time}${timeSuffix}`;
  }

  handleClick() {
    this.setState({ newProject: true });
  }

  handleTextChange(event) {
    this.setState({ titleText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(prevState => {
      return {
        projects: [
          ...prevState.projects,
          {
            id: prevState.counter,
            title: prevState.titleText,
            date: this.formatDate()
          }
        ],
        counter: prevState.counter + 1,
        newProject: false,
        titleText: ''
      };
    });
  }

  handleDeleteProject() {}

  handleEditProject() {}

  render() {
    return (
      <div className="content">
        <ProjectAdder handleClick={this.handleClick} />
        <Projects
          handleSubmit={this.handleSubmit}
          handleTextChange={this.handleTextChange}
          newProject={this.state.newProject}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default Content;
