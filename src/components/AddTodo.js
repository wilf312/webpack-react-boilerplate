import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from 'flux/actions/todoList'

class Component extends React.Component {
  inputText = ''

  render () {
    return (
      <div>
        <input ref={(node) => {
          this.inputText = node
        }} />
        <button onClick={this.clickHandler.bind(this) }>タスク追加</button>
      </div>
    )
  }
  componentWillMount() {
    console.log('mounted')
  }
  clickHandler() {
    const text = this.inputText.value
    if (text == null || text == '') {
      console.log('入力値が空です')
      return
    }

    this.inputText.value = ''

    this.props.dispatch(addTodo(text))
  }
}

export default connect()(Component)




