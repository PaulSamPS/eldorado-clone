import React, { MouseEvent } from 'react';
import { CloseIcon } from '@/icons';
import styles from './Rotate360.module.scss';
import { Rotate360Props } from './Rotate360.props';

export const Rotate360 = ({ setIs360, product }: Rotate360Props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [stop, setStop] = React.useState(false);
  const [handleView, setHandleView] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const IMG_WIDTH = 600;

  React.useEffect(() => {
    if (!stop) {
      const myInterval = setInterval(() => {
        if (imgIndex === product.rotate3d.length - 1) {
          setImgIndex(0);
        } else {
          setImgIndex(imgIndex + 1);
        }
      }, 80);
      return () => clearInterval(myInterval);
    }
  }, [imgIndex, stop]);

  const mouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const share = IMG_WIDTH / product.rotate3d.length;
    const target = imgRef?.current?.getBoundingClientRect();
    const x = e.clientX - target!.left;
    if (Math.floor(x / share + 1) <= 35) {
      setImgIndex(Math.floor(x / share + 1));
    } else {
      setImgIndex(0);
      setHandleView(false);
    }
    if (Math.floor(x / share + 1) === 0) {
      setHandleView(false);
    }
  };

  const handleMouseDown = () => {
    setStop(true);
    setHandleView(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => setIs360(false)}>
          <CloseIcon />
        </div>
        <img
          src={`http://localhost:5000/product/${product.name}/${product.rotate3d[imgIndex].fileName}`}
          alt=''
          draggable='false'
          onClick={() => setStop(true)}
          onMouseDown={handleMouseDown}
          onMouseUp={() => setHandleView(false)}
          onMouseMove={(e) => (handleView ? mouseMove(e) : undefined)}
          ref={imgRef}
        />
        {stop && (
          <div className={styles.play} onClick={() => setStop(false)}>
            ►
          </div>
        )}
      </div>
    </div>
  );
};
