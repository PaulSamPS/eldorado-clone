import React, { MouseEvent } from 'react';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';
import { CloseIcon } from '@/icons';

export const Modal = ({ isModal, children }: ModalProps) => (
  <div className={styles.overlay} onClick={() => isModal(false)}>
    <div
      className={styles.content}
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      {/* <span className={styles.error}>{errorMessage}</span> */}
      <CloseIcon className={styles.close} onClick={() => isModal(false)} />
      {children}
    </div>
  </div>
);
