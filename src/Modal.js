import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'
import Question from './assets/Question.svg'

class Modal extends Component {
  render() {
    return(
      <div className="outer-modal">
        <div className="inner-modal">
          <img className="question-icon" src={Question} alt="question"/>
          <p className="modal-main-text">Are you sure you want to delete this project?<br/>
            <span>This action can't be undone.</span></p>
          <button className="no-button" onClick={(event)=>this.props.handleNo(event)}>No</button>
          <button className="yes-button" onClick={(event)=>this.props.handleYes(event, this.props.id)}>Yes</button>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  handleNo: PropTypes.func.isRequired,
  handleYes: PropTypes.func.isRequired
}

export default Modal;
