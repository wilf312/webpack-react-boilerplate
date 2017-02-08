/**
 * Storeの設定
 */

import { createStore, applyMiddleware } from 'redux'
import reducers from 'flux/reducers'

export const createStoreWithMiddleware = (initialState = {}) => {
  let middlewareList = []

  // 紐付けるミドルウェアを追加
  const store = applyMiddleware(...middlewareList)(createStore)
  return store(reducers, initialState)
}

