import React, { PropTypes } from 'react'
import Todo from 'cmpt/todo'

import { connect } from 'react-redux'
import { toggleTodo } from 'flux/actions/todoList'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    todos: state.todoList.filteredList
  }
}

/**

データ連携部分を理解しながら作る

// viewから actionを叩く

// actionから送りたいデータを生成して reducerを渡す

// reducer内で todoを追加する

// 追加されたtodoがリスト上に反映されたことを確認する


Toggleの実装
dispatchへのアクセス
*/




class TodoList extends React.Component {

  render () {
    console.log(this.props.todos)
    if (this.props.todos == null) {
      return (
        <ul></ul>
        )
    }
    console.log('todos', this.props.todos)
    return (
      <ul>
        {this.props.todos.map((item) =>
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onClick={this.handleClick.bind(this, item.id)}/>
        )}
      </ul>
    )
  }
  componentWillMount() {
    // console.log('mounted')
  }
  handleClick(id) {
    this.props.dispatch(toggleTodo(id))
  }
  componentDidMount() {
    // console.log('mounted')
  }
}




export default connect(
  mapStateToProps
)(TodoList)
