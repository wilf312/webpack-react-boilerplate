import React from 'react'
import styl from 'cmpt/Todo.css'

import {editTodo, openEdit} from 'flux/actions/todoList'
import {connect} from 'react-redux'


class Todo extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {date: new Date()}
  }

  render () {
    return (
      <li>
        <button onClick={this.edit.bind(this, this.props.id, this.props.text)}>編集</button>
        <label>
          <input
            className={styl.text}
            type="checkbox"
            checked={this.props.completed}
            onClick={this.props.onClick}/>
          {this.props.text}
        </label>
      </li>
    )
  }

  edit(id, text) {
    console.log(id)
    this.props.dispatch(openEdit())
    this.props.dispatch(editTodo(id, text))
  }
  tick () {
    // console.log('tick')
    // this.setState({
    //   date: new Date()
    // })
  }

  // 追加されたとき
  componentDidMount() {
    // console.log('mounted')

    // this.timerID = setInterval(
    //   () => this.tick(),
    //   20
    //   )

  }

  // 解除されたとき
  componentWillUnmount() {
    // console.log('unmount')
    // clearInterval(this.timerId)
  }
}



export default connect()(Todo)
