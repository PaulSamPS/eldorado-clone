import React from 'react';
import { ZoomModalProps } from './ZoomModal.props';
import styles from './ZoomModal.module.scss';
import { ZoomProduct } from '../../ZoomProduct/ZoomProduct';
import { useAppContext } from '../../../context/modalContext';
import { ZoomIcon } from '../../../icons';
import cn from 'classnames';

export const ZoomModal = ({ currentProduct, className }: ZoomModalProps) => {
  const { setModal, modalState } = useAppContext();

  return (
    <>
      {!modalState && (
        <div className={cn(styles.wrapper, className)} onClick={() => setModal(true)}>
          <ZoomIcon />
        </div>
      )}
      {modalState && <ZoomProduct currentProduct={currentProduct} />}
    </>
  );
};
