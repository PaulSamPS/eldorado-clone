import React from 'react';
import { CloseIcon } from '../../icons';
import styles from './Rotate360.module.scss';
import { Rotate360Props } from './Rotate360.props';

const img = [
  { id: 0, img: '/001.jpg' },
  { id: 1, img: '/002.jpg' },
  { id: 2, img: '/003.webp' },
  { id: 3, img: '/004.jpg' },
  { id: 4, img: '/005.jpg' },
  { id: 5, img: '/006.webp' },
  { id: 6, img: '/007.jpg' },
  { id: 7, img: '/008.webp' },
  { id: 8, img: '/009.webp' },
  { id: 9, img: '/010.jpg' },
  { id: 10, img: '/011.webp' },
  { id: 11, img: '/012.jpg' },
  { id: 12, img: '/013.webp' },
  { id: 13, img: '/014.webp' },
  { id: 14, img: '/015.jpg' },
  { id: 15, img: '/016.webp' },
  { id: 16, img: '/017.jpg' },
  { id: 17, img: '/018.webp' },
  { id: 18, img: '/019.jpg' },
  { id: 19, img: '/020.jpg' },
  { id: 20, img: '/021.jpg' },
  { id: 21, img: '/022.webp' },
  { id: 22, img: '/023.jpg' },
  { id: 23, img: '/024.jpg' },
  { id: 24, img: '/025.jpg' },
  { id: 25, img: '/026.jpg' },
  { id: 26, img: '/027.jpg' },
  { id: 27, img: '/028.webp' },
  { id: 28, img: '/029.jpg' },
  { id: 29, img: '/030.jpg' },
  { id: 30, img: '/031.jpg' },
  { id: 31, img: '/032.webp' },
  { id: 32, img: '/033.jpg' },
  { id: 33, img: '/034.jpg' },
  { id: 34, img: '/035.jpg' },
  { id: 35, img: '/036.webp' },
];

export const Rotate360 = ({ setIs360 }: Rotate360Props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [stop, setStop] = React.useState(false);

  React.useEffect(() => {
    if (!stop) {
      const myInterval = setInterval(() => {
        if (imgIndex === img.length - 1) {
          setImgIndex(0);
        } else {
          setImgIndex(imgIndex + 1);
        }
      }, 80);
      return () => clearInterval(myInterval);
    }
  }, [imgIndex, stop]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => setIs360(false)}>
          <CloseIcon />
        </div>
        <img
          src={img[imgIndex].img}
          alt=''
          onMouseDown={() => setStop(true)}
          onMouseUp={() => setStop(false)}
        />
      </div>
    </div>
  );
};
