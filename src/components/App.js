// ./src/components/App
import styles from './App.css';
import React from 'react'


// ----------------- Viewファイルの読み込み

import About from 'views/about';
import Home from 'views/home';
import Users from 'views/users';
import Todos from 'views/todos';


import Modal from 'cmpt/Modal';


// ----------------- Reduxの実装追加
import { Provider } from 'react-redux'
import {createStoreWithMiddleware} from 'flux/store'

// ----------------- テスト用
import {addTodo} from 'flux/actions/todoList'



const App = React.createClass({
  getInitialState() {
    // console.log('getInitialState')
    return {
      route: window.location.hash.substr(1)
    }
  },

  componentDidMount() {
    // console.log('componentDidMount')
    window.addEventListener('hashchange', () => {
      // console.log('hashchange')
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/users': Child = Users; break;
      case '/todos': Child = Todos; break;
      default: Child = Home;
    }

    let store = createStoreWithMiddleware()


    console.log(store)



    store.dispatch(addTodo('Aというタスク'))
    store.dispatch(addTodo('Bというタスク'))
    store.dispatch(addTodo('[♥óܫò]😍 絵文字テスト タスク'))
    store.dispatch(addTodo('(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀) タスク'))
    store.dispatch(addTodo('...............'))
    store.dispatch(addTodo('੭ੇʓ ੭ੇʓ'))
    store.dispatch(addTodo('...............'))
    store.dispatch(addTodo('ઈ(@̴̨̊̋̐̃̀̽̽ͅ❦@̴̨̊̋̐̃̀̽̽ͅ)ૐタスク'))





    return (
      <Provider store={store}>
        <div className={styles.app}>
            <h1>App</h1>
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/users">Users</a></li>
              <li><a href="#/todos">Todos</a></li>
            </ul>
            <Child/>
            <Modal/>
        </div>
      </Provider>
      )

  },
})


export default App;