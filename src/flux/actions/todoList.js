/**
 * reducerのパーツを一括でまとめる
 * (Storeと紐付ける関数に渡す)
 */

// データを受け取ったら、
// reducerにデータを渡す


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const visibleFilter = (filter) => {
  return {
    type: 'VISIBLE_FILTER',
    filter,
  }
}



export const editTodo = (id, text) => {
  console.log('id -> ', id);
  console.log('text -> ', text);
  return {
    type: 'EDIT_TODO',
    id,
    text,
  }
}
export const resetEditTodo = () => {
  return {
    type: 'RESET_EDIT_TODO',
  }
}
export const openEdit = () => {
  return {
    type: 'OPEN_EDIT',
  }
}
export const closeEdit = () => {
  return {
    type: 'CLOSE_EDIT',
  }
}