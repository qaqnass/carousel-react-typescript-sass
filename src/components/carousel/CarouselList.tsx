import React from 'react';
import { CarouselListInterface } from './interfaces';

/**
 * The CarouselList component is managing the Carousel image list.
 * @param windowWidth {Number} - width of the screen
 * @param selectedImages {String[]} - Images need to be show per block
 * @param carousel {object}- carousel object
 */
export const CarouselList: React.FC<CarouselListInterface> = ({
  windowWidth,
  selectedImages,
  carousel
}) => {
  return (
    <li className="carousel-block">
      <div className="carousel-block-container">
        {selectedImages &&
          selectedImages.images &&
          selectedImages.images.map((url, i) => {
            return (
              <div key={i} className={`carousel-block-xs${selectedImages.images.length}`}>
                <div className='carousel-block-image-container'>
                  <img src={url} />
                </div>
              </div>
            )
          })}
      </div>
      <div>
        <h3>{carousel.title}</h3>
      </div>
    </li>
  )
}
