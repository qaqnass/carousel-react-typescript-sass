import { CarouselItemInterface } from '../carousel/interfaces';

export const handleRandomeImage = (
  item: CarouselItemInterface,
  imageToshow: number
): string[] => {

  let { images } = item;

  if (images.length <= imageToshow) {
    return images;
  }

  return getRandomImage(images, imageToshow);
}

const getRandomImage = (images: string[], n: number): string[] => {
  let result = new Array(n),
    len = images.length,
    selectedImages = new Array(len);

  if (n > len) {
    throw new RangeError("Not enough elements to take");
  }

  let x = -1;

  while (n--) {
    x = Math.floor(Math.random() * len);
    result[n] = images[x in selectedImages ? selectedImages[x] : x];
    selectedImages[x] = --len in selectedImages ? selectedImages[len] : len;
  }

  return result;
}

export const handleScreenSize = (windowWidth: number): number => {
  if (windowWidth < 820 && windowWidth > 620) {
    return 668;
  }

  if (windowWidth < 620) {
    return 342;
  }

  return 900;
}

export const handleSliderToShow = (windowWidth: number): number => {
  if (windowWidth < 820 && windowWidth > 620) {
    return 3;
  }

  if (windowWidth < 620) {
    return 1;
  }

  return 4;
}