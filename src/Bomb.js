import React from 'react'

export default class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft : props.initialCount
    }
  }

  isThereTime = () => {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render () {
    return (
      <span>
        {this.isThereTime()}
      </span>
      )
  }
}
