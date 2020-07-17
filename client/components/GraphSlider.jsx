import React from 'react'
import Slider from 'react-slick'
import Carousel from 'react-bootstrap/Carousel'

import DonutGraph from './DonutGraph'

class GraphSlider extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>A budgetting App</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/400?text=Second slide&bg=373940"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>A budgetting App</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/400?text=Third slide&bg=373940"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>A budgetting App</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default GraphSlider
