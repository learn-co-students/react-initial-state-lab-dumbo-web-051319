// your ImageSlider code here!
import React, {Component} from 'react';

class ImageSlider extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

render() {
  console.log(this.props)
  return (
      <h3>'I am on slide {this.state.currentSlideIndex}'</h3>
  )
}


}
export default ImageSlider
