
export interface CarouselItemInterface {
  title: string;
  images: string[];
}

export interface CarouselInterface {
  list: CarouselItemInterface[]
}

export interface ImagesInterface {
  images: string[]
}

export interface CarouselListInterface {
  windowWidth: number;
  selectedImages: CarouselSelectedImagesInterface;
  carousel: CarouselItemInterface;
}

export interface CarouselSelectedImagesInterface {
  length: number;
  images: string[];
}

export interface WindowWidthInterface {
  windowWidth: number;
}
