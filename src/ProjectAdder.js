import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlusSign from './assets/Plus Sign.svg';
import style from './ProjectAdder.module.css';

class ProjectAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {}
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(hovering) {
    var hoveringStyle = {
      background: '#3D3A4F',
      boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)'
    };
    var style = hovering ? hoveringStyle : {};
    this.setState({ style: style });
  }

  render() {
    return (
      <div
        onClick={this.props.handleClick}
        style={this.state.style}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
        className={style["project-adder"]}
      >
        <img className={style["plus-sign"]} src={PlusSign} alt="Plus Sign"/>
      </div>
    );
  }
}

ProjectAdder.propTypes = {
  handleClick: PropTypes.func.isRequired  
}

export default ProjectAdder;
