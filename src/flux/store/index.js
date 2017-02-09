// /**
//  * Storeの設定
//  */

// import { createStore as _createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from 'flux/reducers'
// import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'



// export default function createStoreWithMiddleware(history, client, data) {
//   // Sync dispatched route actions to the history
//   const reduxRouterMiddleware = routerMiddleware(history)

//   const middleware = [reduxRouterMiddleware, thunk]

//   let finalCreateStore
//   if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
//     const { persistState } = require('redux-devtools')
//     const DevTools = require('cmpt/DevTools')
//     // finalCreateStore = applyMiddleware(...middleware)(_createStore)
//     finalCreateStore = compose(
//       applyMiddleware(...middleware),
//       window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
//       persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//     )(_createStore)
//   } else {
//     finalCreateStore = applyMiddleware(...middleware)(_createStore)
//   }

//   const reducer = require('flux/reducers').default
//   const store = finalCreateStore(reducer, data)


//   return store
// }




import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}