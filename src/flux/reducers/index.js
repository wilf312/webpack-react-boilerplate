/**
 * reducerのパーツを一括でまとめる
 * (Storeと紐付ける関数に渡す)
 */


import { combineReducers } from 'redux'


import todoList from 'flux/reducers/todoList'


const todoApp = combineReducers({
  todoList,
})


export default todoApp