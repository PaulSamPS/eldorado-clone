import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { UserIcon } from '@/icons';
import styles from './Login.module.scss';
import { LoginProps } from './Login.props';
import { Modal, Auth, Inputs } from '@/components/ReusableComponents';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { login } from '@/redux/actions';
import { StepContext } from '@/context';

const stepsComponents: any = { 0: Auth, 1: Inputs };

export const Login = ({ className }: LoginProps) => {
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  React.useEffect(() => {
    dispatch(login());
  }, []);

  return (
    <div className={cn(styles.wrapper, className)}>
      {user && user.phone ? (
        <Link href='/personal'>
          <a className={styles.login}>
            <UserIcon />
            <p>{user.phone}</p>
          </a>
        </Link>
      ) : (
        <div className={styles.login} onClick={() => setIsModal(true)}>
          <UserIcon />
          <p>Вход или регистрация</p>
        </div>
      )}
      {isModal && (
        <Modal isModal={setIsModal} errorMessage='error'>
          <StepContext.Provider value={{ step, nextStep, setStep }}>
            <Step />
          </StepContext.Provider>
        </Modal>
      )}
    </div>
  );
};
