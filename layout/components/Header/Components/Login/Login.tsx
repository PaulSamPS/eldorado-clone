import React from 'react';
import cn from 'classnames';
import { UserIcon } from '@/icons';
import styles from './Login.module.scss';
import { LoginProps } from './Login.props';
import { Modal, Auth } from '@/components/ReusableComponents';

export const Login = ({ className }: LoginProps) => {
  const [isModal, setIsModal] = React.useState<boolean>(false);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.login} onClick={() => setIsModal(true)}>
        <UserIcon />
        <p>Вход или регистрация</p>
      </div>
      {isModal && (
        <Modal isModal={setIsModal} errorMessage='error'>
          <Auth />
        </Modal>
      )}
    </div>
  );
};
