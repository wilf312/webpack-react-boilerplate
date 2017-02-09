import React from 'react'
import ReactDOM from 'react-dom'


// ----------------- Reduxの実装追加
import { Provider } from 'react-redux'
import appReducer from 'flux/reducers/index';
import configureStore from 'flux/store'

// ----------------- テスト用
import {addTodo} from 'flux/actions/todoList'



import { AppContainer } from 'react-hot-loader'

import App from './components/App'

const render = (Component) => {

  let store = configureStore()
  ReactDOM.render(
   <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}


render(App)


// hot module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}


