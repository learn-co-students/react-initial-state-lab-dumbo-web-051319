// your Bomb code here!
import React from 'react'
import PropTypes from 'prop-types'

class Bomb extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  handleClick = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    })
  }

  render () {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return(
      <div>{message}</div>
    )
  }
}

export default Bomb;
