// your Bomb code here!
import React, {Component} from 'react';

class Bomb extends Component {

  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  // slapToDom = (e) => {
  //   conditional
  // }

  render(){

console.log(this.props)
    return (
      <h3>{this.state.secondsLeft > 0 ?  `${this.state.secondsLeft } seconds left before I go boom!` : "Boom!" } </h3>
    )
  }




}

export default Bomb
