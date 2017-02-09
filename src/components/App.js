// ./src/components/App
import styles from './App.css';
import React from 'react'


// ----------------- Viewファイルの読み込み

import About from 'views/about';
import Home from 'views/home';
import Users from 'views/users';
import Todos from 'views/todos';
import Keyboard from 'views/keyboard';



import Modal from 'cmpt/Modal';


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
      case '/keyboard': Child = Keyboard; break;
      default: Child = Home;
    }



    return (
        <div className={styles.app}>
            <h1>App</h1>
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/users">Users</a></li>
              <li><a href="#/todos">Todos</a></li>
              <li><a href="#/keyboard">Keyboard</a></li>
            </ul>
            <Child/>
        </div>
      )

  },
})




export default App;