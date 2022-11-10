import React from 'react';
import cn from 'classnames';
import { UserIcon } from '@/icons';
import styles from './Login.module.scss';
import { LoginProps } from './Login.props';
import { Modal, Auth } from '@/components/ReusableComponents';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { login } from '@/redux/actions';

export const Login = ({ className }: LoginProps) => {
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <div className={cn(styles.wrapper, className)}>
      {user && user.phone ? (
        <div className={styles.login}>
          <UserIcon />
          <p>{user.phone}</p>
        </div>
      ) : (
        <div className={styles.login} onClick={() => setIsModal(true)}>
          <UserIcon />
          <p>Вход или регистрация</p>
        </div>
      )}
      {isModal && (
        <Modal isModal={setIsModal} errorMessage='error'>
          <Auth setIsModal={setIsModal} />
        </Modal>
      )}
    </div>
  );
};
