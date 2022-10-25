import React, { useContext } from 'react';
import styles from './ZoomProduct.module.scss';
import { ZoomProductProps } from './ZoomProduct.props';
import { Carousel } from '@/components/ReusableComponents';
import { CloseIcon } from '@/icons';
import { AppContext } from '@/context';
import { generateWidthCarousel } from '../../helpers/generateWidthCarousel';
import { useScreenWidth } from '@/hooks';

export const ZoomProduct = ({ currentProduct }: ZoomProductProps) => {
  const { modal, setModal } = useContext(AppContext);
  const screenWidth = useScreenWidth();
  return (
    <div className={styles.wrapper}>
      {modal && (
        <div className={styles.close} onClick={() => (setModal ? setModal(false) : undefined)}>
          <CloseIcon />
        </div>
      )}
      <Carousel
        currentProduct={currentProduct}
        className={styles.carousel}
        imageWidth={generateWidthCarousel(500, screenWidth)}
      />
    </div>
  );
};
