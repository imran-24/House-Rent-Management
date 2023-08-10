import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ListingImages = ({images}) => {
  return (
    <Carousel
    className='w-[200px] h-[100px]'
    showArrows={true}
    showIndicators={true}
    showThumbs={false}
    infiniteLoop={true}
    stopOnHover={true}
    showStatus={false}>
      {
        images.map((image, index) =>(
          <div key={index}>
              <img src={image} className='w-full rounded-lg' />
          </div>
        ))
      }

    </Carousel>

  )
}

export default ListingImages