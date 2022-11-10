import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import styles from './Auth.module.scss';
import { Button } from '@/components/Ui';
import { $host } from '@/http';
import { CodeInput } from './components';
import { AuthProps } from './Auth.props';
import { useAppSelector } from '@/hooks';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const Auth = ({ setIsModal }: AuthProps) => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEnterCode, setIIsEnterCode] = React.useState<boolean>(true);
  const [userId, setUserId] = React.useState<string>('');
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);

  const onSubmitPhone = async () => {
    try {
      const res = await $host.post('code/get', { phone: values.formattedValue });
      setIsLoading(true);
      setUserId(res.data._id);
      setIIsEnterCode(true);
    } catch (e) {
      setIIsEnterCode(false);
      console.warn('Ошибка при звонке', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <NumberFormat
        name='phone'
        format='+7 (###) ###-##-##'
        mask='_'
        placeholder='+7 (123) 456-78-90'
        value={user ? user.phone : values.formattedValue}
        onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
        disabled={isAuth || isEnterCode || user !== null}
      />
      <label htmlFor='phone'>Телефон</label>
      {!isAuth && !user && (
        <>
          {!isEnterCode ? (
            <Button
              appearance='primary'
              className={styles.btn}
              disabled={values.value ? values.value.length < 10 : true}
              onClick={onSubmitPhone}
            >
              Получить код
            </Button>
          ) : (
            <CodeInput userId={userId} setIsAuth={setIsAuth} />
          )}
        </>
      )}
    </div>
  );
};
