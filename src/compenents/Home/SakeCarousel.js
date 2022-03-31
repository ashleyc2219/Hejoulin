import React from 'react'
import './SakeCarousel.scss'
import Carousel from './Carousel'

const SakeCarousel = (props) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <div className="SakeCarousel">
        <Carousel items={items} active={0} />
      </div>
    </>
  )
}

export default SakeCarousel
