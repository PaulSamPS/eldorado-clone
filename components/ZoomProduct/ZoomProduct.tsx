import React from 'react';
import styles from './ZoomProduct.module.scss';
import { ZoomProductProps } from './ZoomProduct.props';
import { Carousel } from '../ReusableComponents';
import { CloseIcon } from '../../icons';
import { useAppContext } from '../../context/modalContext';

export const ZoomProduct = ({ currentProduct }: ZoomProductProps) => {
  const { modalState, setModal } = useAppContext();
  return (
    <div className={styles.wrapper}>
      {modalState && (
        <div className={styles.close} onClick={() => (setModal ? setModal(false) : undefined)}>
          <CloseIcon />
        </div>
      )}
      <Carousel currentProduct={currentProduct} className={styles.carousel} imageWidth={500} />
    </div>
  );
};
