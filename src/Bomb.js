import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const msg = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!";
    return (
      <p>{msg}</p>
    )
  }
}
