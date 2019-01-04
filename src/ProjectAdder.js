import React, {Component} from 'react';

class ProjectAdder extends Component {
  render() {
    return ( 
        <button onClick={this.props.handleClick} style={{position: 'absolute'}}>Add Project</button> 
    )
  }
}

export default ProjectAdder;
