/**
 * Storeの設定
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'flux/reducers'

// export const createStoreWithMiddleware = (initialState = {}) => {
//   let middlewareList = []

//   // 紐付けるミドルウェアを追加
//   const store = applyMiddleware(...middlewareList)(createStore)

//   return store(reducers, initialState)
// }



export const createStoreWithMiddleware = (initialState = {}) => {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/index', () =>
      store.replaceReducer(require('../reducers/index').default)
    )
  }

  return store
}
