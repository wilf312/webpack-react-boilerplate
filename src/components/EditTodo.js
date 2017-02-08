import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styl from './EditTodo.styl'

import {closeEdit, fixedTodo} from 'flux/actions/todoList'


class EditTodo extends React.Component {

  constructor (props) {
    console.log('============================- constructor')
    super(props)
  }

  componentDidMount() {
    this.refs.text.value = this.props.text ? this.props.text : ''
    console.log(this.refs.text)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('this.props -> ', this.props);
    console.log('nextProps -> ', nextProps);

    // 変更あった
    if (this.props.editorData.id !== nextProps.editorData.id ||
        this.props.isEditing !== nextProps.isEditing) {
      this.refs.text.value = nextProps.editorData.text
      return true
    }
    // なかった
    else {
      return false
    }
  }


  render () {
    return (
      <div className={this.props.isEditing ? styl.EditTodo : styl.off}>
        編集中
        {this.props.isEditing}
        <input ref="text"/>
        {this.props.editorData.id}
        <p>
          <button onClick={this.clickFixed.bind(this)}>確定</button>
          <button onClick={this.clickCancel.bind(this)}>キャンセル</button>
        </p>
      </div>
    )
  }

  clickFixed () {

    this.props.dispatch(fixedTodo(this.props.editorData.id, this.refs.text.value))
    this.props.dispatch(closeEdit())
  }

  clickCancel () {
    console.log('editフラグをfalseにします')
    this.props.dispatch(closeEdit())
  }

}

const mapStateToProps = (state) => {
  return {
    isEditing: state.todoList.isEditing,
    editorData: state.todoList.editorData,
  }
}


export default connect(
  mapStateToProps,
  )(EditTodo)