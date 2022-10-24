import React from 'react';
import { useRouter } from 'next/router';
import { useScreenWidth } from './useScreenWidth';

interface ISlider {
  imageWidth: number;
  arrLength: number;
  auto?: boolean;
  duration?: number;
  preview?: boolean;
  imageWidthPreview?: number;
}

export const useSlider = ({
  imageWidthPreview,
  preview,
  imageWidth,
  arrLength,
  auto,
  duration,
}: ISlider) => {
  const screenWidth = useScreenWidth();
  const [offset, setOffset] = React.useState<number>(0);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [offsetPreview, setOffsetPreview] = React.useState<number>(0);
  const IMG_WIDTH = imageWidth;
  const IMG_WIDTH_PREVIEW = imageWidthPreview;
  const { query } = useRouter();

  React.useEffect(() => {
    setSlideIndex(0);
    setOffsetPreview(0);
    setOffset(0);
  }, [query, screenWidth]);

  React.useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        if (slideIndex === arrLength - 1) {
          setSlideIndex(0);
          setOffset(0);
        } else {
          setOffset((currentOffset: number) =>
            Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * arrLength))
          );
          setSlideIndex((prevState) => prevState + 1);
        }
      }, duration || 5000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [slideIndex, auto]);

  const right = () => {
    if (slideIndex === arrLength - 1) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) =>
        Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (arrLength - 1)))
      );
      setSlideIndex(slideIndex + 1);
      if (preview) {
        setOffsetPreview((currentOffset: number) =>
          Math.max(currentOffset - IMG_WIDTH_PREVIEW!, -(IMG_WIDTH_PREVIEW! * (arrLength - 4)))
        );
      }
    }
  };

  const left = () => {
    setOffset((currentOffset: number) => Math.min(currentOffset + IMG_WIDTH, 0));
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
    if (preview) {
      setOffsetPreview((currentOffset: number) => Math.min(currentOffset + IMG_WIDTH_PREVIEW!, 0));
    }
  };

  const dots = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
    if (preview) {
      setOffsetPreview((currentOffset: number) =>
        Math.max(currentOffset - IMG_WIDTH_PREVIEW!, -(IMG_WIDTH_PREVIEW! * (arrLength - 4)))
      );
    }
  };

  return { offset, right, left, dots, slideIndex, offsetPreview };
};
