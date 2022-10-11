import React from 'react';
import { CloseIcon } from '../../icons';
import styles from './Rotate360.module.scss';
import { Rotate360Props } from './Rotate360.props';

export const Rotate360 = ({ setIs360, product }: Rotate360Props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [stop, setStop] = React.useState(false);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => setIs360(false)}>
          <CloseIcon />
        </div>
        <img
          src={`http://localhost:5000/product/${product.name}/${product.rotate3d[imgIndex].fileName}`}
          alt=''
          onMouseDown={() => setStop(true)}
          onMouseUp={() => setStop(false)}
        />
      </div>
    </div>
  );
};
