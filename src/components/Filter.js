import React, { PropTypes } from 'react'
import styles from './Filter.css'
import { visibleFilter } from 'flux/actions/todoList'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    currentFilter: state.todoList.filter
  }
}


class Filter extends React.Component {
  stateType = [
    {text: '全て', filterType: 'SHOW_ALL'},
    {text: '完了済', filterType: 'SHOW_COMPLETED'},
    {text: '未完了', filterType: 'SHOW_ACTIVE'},
  ]
  render () {
    return (
      <ul className={styles.Filter}>
        {this.stateType.map((item) =>
          <li
            className={this.props.currentFilter === item.filterType ? styles.active : ''}
            key={item.text}
            onClick={this.handleClick.bind(this, item.filterType)}>{item.text}</li>

        )}
      </ul>
    )
  }
  componentWillMount() {
    // console.log('mounted')
  }
  handleClick(filterType) {
    console.log('filterType', filterType)
    // console.log(this)

    this.props.dispatch(visibleFilter(filterType))

  }
  componentDidMount() {
  }
}


export default connect(
  mapStateToProps
)(Filter)

