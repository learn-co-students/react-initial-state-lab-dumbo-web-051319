// your Bomb code here!
// your Bomb code here!

import React from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      secondsLeft: this.props.initialCount
    }
  }

  ticker = () => {
    if(this.state.secondsLeft===0){
        return <p>Boom!</p>}
      else{
        return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>}
      }

  render(){
    // debugger
    return (
      <div>{this.ticker()}</div>
    )
  }
}
