import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Modal.module.css'
import Question from './assets/Question.svg'

class Modal extends Component {
  render() {
    return(
      <div className={style["outer-modal"]}>
        <div className={style["inner-modal"]}>
          <img className={style["question-icon"]} src={Question} alt="question"/>
          <p className={style["modal-main-text"]}>Are you sure you want to delete this project?<br/>
            <span>This action can't be undone.</span></p>
          <button className={style["no-button"]} onClick={(event)=>this.props.handleNo(event)}>No</button>
          <button className={style["yes-button"]} onClick={(event)=>this.props.handleYes(event, this.props.id)}>Yes</button>
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
