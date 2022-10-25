import React, { useContext } from 'react';
import cn from 'classnames';
import { ZoomModalProps } from './ZoomModal.props';
import styles from './ZoomModal.module.scss';
import { ZoomProduct } from '@/components';
import { AppContext } from '@/context';
import { ZoomIcon } from '@/icons';

export const ZoomModal = ({ currentProduct, className }: ZoomModalProps) => {
  const { setModal, modal } = useContext(AppContext);

  return (
    <>
      {!modal && (
        <div
          className={cn(styles.wrapper, className)}
          onClick={() => (setModal ? setModal(true) : undefined)}
        >
          <ZoomIcon />
        </div>
      )}
      {modal && <ZoomProduct currentProduct={currentProduct} />}
    </>
  );
};
