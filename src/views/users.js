import React from 'react'
import styles from './users.css'


// コンポーネントの名前を取得 ( __fileNameが渡される想定 )
const path = require('path')
function getFileName(fileName) {
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)

    return baseName.replace(extName, '')
}

const componentName = getFileName(__filename)
// import styles from `./${componentName}.css`


const Users = () => (
  <div className={styles[componentName]}>
    <h2>Users</h2>
    <h3>Users</h3>
  </div>
)



export default Users
