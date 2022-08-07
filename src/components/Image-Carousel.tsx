import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={20} loop={true} showDots={true} autoplay={1000}>
      <Carousel.Item>
        <img width="70%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="70%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="70%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="70%" src="https://picsum.photos/800/600?random=4" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}


export default Gallery;