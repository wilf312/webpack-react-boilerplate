import React from 'react'
import styles from './todos.css'

import AddTodo  from 'cmpt/AddTodo'
import TodoList  from 'cmpt/TodoList'
import Filter  from 'cmpt/Filter'
import EditTodo  from 'cmpt/EditTodo'


// コンポーネントの名前を取得 ( __fileNameが渡される想定 )
const path = require('path')
function getFileName(fileName) {
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)

    return baseName.replace(extName, '')
}

const componentName = getFileName(__filename)
// import styles from `./${componentName}.css`


const Todos = () => (
  <div className={styles[componentName]}>
    <h2>Todoリストのタイトルです。</h2>
    <Filter/>
    <AddTodo/>
    <TodoList/>
    <EditTodo/>
  </div>
)



export default Todos
