/**
 * Todoのリスト構造を管理する人
 */

 import _ from 'lodash'

const initialState = {
  id: 0,
  all: [],
  filter: 'SHOW_ALL',
  filteredList: [],
  isEditing: false,
  editorData: {
    text: '',
    id: -1,
  },
}


const addTodo = ( state, action, id ) => {
  const { type } = action

  switch (type) {
    case 'ADD_TODO':
      return {
        id: id,
        text: action.text,
        completed: false,
      }
    default:
      return state
  }
}



const getVisibleTodos = (allList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return allList
    case 'SHOW_COMPLETED':
      return allList.filter((t) =>  t.completed)
    case 'SHOW_ACTIVE':
      return allList.filter((t) =>  !t.completed)
  }
}




export default ( state = initialState, action ) => {
  const { type } = action


  const createNewState = (newState) => {
    return Object.assign({}, state, newState)
  }
  const all = _.clone(state.all)
  let newAll = []

  switch (type) {
    case 'ADD_TODO':
      newAll = [
          ...all,
          addTodo(undefined, action, ++state.id)
        ]

      return createNewState({
        all: newAll,
        filteredList: getVisibleTodos(newAll, state.filter)
      })

    case 'TOGGLE_TODO':
      newAll = all.map((item) => {
        if ( item.id !== action.id) {
          return item
        }
        return Object.assign({}, item, {
          completed: !item.completed
        })

      })

      return createNewState({
        all: newAll,
        filteredList: getVisibleTodos(newAll, state.filter)
      })

    case 'VISIBLE_FILTER':
      console.log('VISIBLE_FILTER')
      const newFilteredList = getVisibleTodos(all, action.filter)

      return createNewState({
        filteredList: newFilteredList,
        filter: action.filter
      })

    // 編集するデータの受け渡し
    case 'EDIT_TODO':
      return createNewState({
        editorData: {
          id: action.id,
          text: action.text,
        }
      })

    // 編集するデータのリセット
    case 'RESET_EDIT_TODO':
      return createNewState({
        editorData: _.clone(initialState.editorData)
      })


    // 編集ウィンドウの開閉
    case 'OPEN_EDIT':
      return createNewState({ isEditing: true })
    case 'CLOSE_EDIT':
      return createNewState({ isEditing: false })




    default:
      return state
  }

}