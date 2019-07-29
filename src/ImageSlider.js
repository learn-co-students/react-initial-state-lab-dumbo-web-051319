// your ImageSlider code here!
import React from 'react'
import PropTypes from 'prop-types'

class ImageSlider extends React.Component {
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render () {
    return(
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

export default ImageSlider;
