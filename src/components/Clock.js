import React from 'react'


class Component extends React.Component {

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }


  render () {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    )
  }


  tick () {
    console.log('tick')
    this.setState({
      date: new Date()
    })
  }

  // 追加されたとき
  componentDidMount() {
    console.log('mounted')

    this.timerID = setInterval(
      () => this.tick(),
      20
      )

  }

  // 解除されたとき
  componentWillUnmount() {
    console.log('unmount')
    clearInteerval(this.timerId)
  }
}



export default Component