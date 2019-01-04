import React, {Component} from 'react';

class Projects extends Component {
  render() {
    var data = this.props.projects.map(function(project){
      return <div>{project.name}</div>
    })
    return ( 
      <div style={{position: 'absolute', top: '200px'}}>
        {data}
      </div>
    )
  }
}

export default Projects;
