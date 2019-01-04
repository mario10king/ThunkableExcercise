import React, {Component} from 'react';
import PlusSign from './assets/Plus\ Sign.svg'
import './ProjectAdder.css'

class ProjectAdder extends Component {
  constructor(props){
    super(props)

    this.state = {
      Style: {},
    }

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(hovering) {
    var hoveringStyle = {background: '#3D3A4F', boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)'};
    var style = hovering ? hoveringStyle : {};
    this.setState({Style: style});
  }

  render() {
    return ( 
      <div onClick={this.props.handleClick} style={this.state.Style} onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)} className="project-adder">
        <img id='plus-sign' src={PlusSign}/>
      </div>
    )
  }
}

export default ProjectAdder;
