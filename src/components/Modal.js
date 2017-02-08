import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styl from './Modal.css'

class Modal extends React.Component {
  render () {
    return (
      <div className={styl.Modal}>
      </div>
    )
  }
}


export default connect(
)(Modal)

