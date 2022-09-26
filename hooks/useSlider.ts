import React from 'react';

export const useSlider = (imageWidth: number, arrLength: number, auto?: boolean) => {
  const [offset, setOffset] = React.useState<number>(0);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const IMG_WIDTH = imageWidth;

  React.useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        if (slideIndex === arrLength - 1) {
          setSlideIndex(0);
          setOffset(0);
        } else {
          setOffset((currentOffset: number) => {
            return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * arrLength));
          });
          setSlideIndex((slideIndex) => slideIndex + 1);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slideIndex]);

  const right = () => {
    if (slideIndex === arrLength - 1) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) => {
        return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (arrLength - 1)));
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  const left = () => {
    setOffset((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const dots = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
  };

  return { offset, right, left, dots, slideIndex };
};
