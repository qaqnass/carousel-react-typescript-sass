import React, { useEffect, useRef, useState } from 'react';
import { carouselData } from '../../data/carouselData';
import { CarouselList } from './CarouselList';
import next from '../../images/icons/next.svg';
import prev from '../../images/icons/prev.svg';
import {
  handleRandomeImage,
  handleScreenSize,
  handleSliderToShow
} from '../functions/carouselFunctions';
import {
  CarouselSelectedImagesInterface,
  WindowWidthInterface
} from './interfaces';


/**
 * this component is used to manage Carousel.
 * @param windowWidth {Number} - width of the screen
 */
export const Carousel: React.FC<WindowWidthInterface> = ({ windowWidth }) => {
  const [selectedImages, setSelectedImages] =
    useState<CarouselSelectedImagesInterface[]>([])
  const [carsouelState, setCarsouelState] = useState<string>('start');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const carouselLength = carouselData.length;
  let screenSize = handleScreenSize(windowWidth);
  const listRef = useRef<any>(null);

  useEffect(() => {
    let randomImages: CarouselSelectedImagesInterface[] = [];
    // preparing random images from the carousel data
    carouselData.forEach((c) => {
      let temp = handleRandomeImage(c, handleSliderToShow(windowWidth));

      randomImages.push({
        length: temp.length,
        images: temp
      });
    });

    setSelectedImages(randomImages);
  }, [carouselData]);

  const handelNextBtn = () => {
    let tempLength = currentBlock + 1;

    if (tempLength !== carouselLength - 1) {
      setCarsouelState('between');
    } else if (tempLength > carouselLength) {
      return;
    } else {
      setCarsouelState('end');
    }

    if (
      listRef.current &&
      listRef.current.scrollBy
    ) {
      listRef.current.scrollBy({
        top: 0,
        left: screenSize,
        behavior: 'smooth'
      })
    }

    setCurrentBlock(tempLength);
  }

  const handelPrevBtn = () => {
    let tempLength = currentBlock - 1;

    if (tempLength > 0) {
      setCarsouelState('between');
    } else if (tempLength < 0) {
      return;
    } else {
      setCarsouelState('start');
    }

    if (
      listRef.current &&
      listRef.current.scrollBy
    ) {
      listRef.current.scrollBy({
        top: 0,
        left: screenSize * -1,
        behavior: 'smooth'
      });
    }

    setCurrentBlock(tempLength);
  }

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth = event.currentTarget.scrollWidth;
    const clientWidth = event.currentTarget.clientWidth;

    if (scrollLeft === 0) {
      setCarsouelState('start')
    } else if (scrollWidth - clientWidth === scrollLeft) {
      setCarsouelState('end');
    } else {
      setCarsouelState('between');
    }

    setScrollProgress(scrollLeft);
  };

  return (
    <div className="carousel">
      {!(carsouelState === 'start') &&
        <img
          data-set='icon-prev'
          onClick={handelPrevBtn}
          className={"carousel-icon prev"}
          src={prev}
          alt="Previous Icon"
        />
      }
      <div
        className="carousel-container"
        ref={listRef}
        onScroll={scrollHandler}>
        <ul>
          {carouselData.map((c, index) => {
            return (
              <CarouselList
                key={index}
                windowWidth={windowWidth}
                selectedImages={selectedImages[index]}
                carousel={c}
              />
            )
          })}
        </ul>
      </div>
      {!(carsouelState === 'end') &&
        <img
          data-set='icon-next'
          onClick={handelNextBtn}
          className={"carousel-icon next"}
          src={next}
          alt="Next Icon"
        />
      }
    </div>
  )
}
