import React, { MouseEvent } from 'react';
import { login, registration } from '../../redux/actions/authAction';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ModalLoginProps } from './ModalLogin.props';
import styles from './ModalLogin.module.scss';
import { Input } from '../Ui/Input/Input';
import { Button } from '../Ui/Button/Button';
import { CloseIcon } from '../../icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setErrorRegistration } from '../../redux/reducers/registrationReducer';
import { setErrorLogin } from '../../redux/reducers/loginReducer';

const ModalLogin = ({ closeModal }: ModalLoginProps): JSX.Element => {
  const [email, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isAuth, setIsAuth] = React.useState<boolean>(true);
  const { errorMessage } = useAppSelector((state) => state.loginUser);
  const dispatch = useAppDispatch();

  const auth = async (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    isAuth
      ? await dispatch(login({ password, email }))
      : await dispatch(registration({ password, email }));
    // closeModal();
  };

  const handleCloseModal = () => {
    dispatch(setErrorRegistration(''));
    dispatch(setErrorLogin(''));
    closeModal();
  };

  return (
    <div className={styles.overlay} onClick={handleCloseModal}>
      <form
        className={styles.content}
        onClick={(e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLFormElement>) =>
          e.stopPropagation()
        }
      >
        <span className={styles.error}>{errorMessage}</span>
        <h2>{isAuth ? 'Вход' : 'Регистрация'}</h2>
        <CloseIcon className={styles.close} onClick={handleCloseModal} />
        <Input
          className={styles.inputLogin}
          placeholder='Email'
          type='email'
          onChange={(e) => setLogin(e.target.value)}
          value={email}
        />
        <Input
          className={styles.inputPassword}
          placeholder='Пароль'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button appearance='primary' onClick={auth}>
          {isAuth ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <span className={styles.authMethod} onClick={() => setIsAuth(!isAuth)}>
          {isAuth ? 'Регистрация' : 'Вход'}
        </span>
      </form>
    </div>
  );
};

export default ModalLogin;
