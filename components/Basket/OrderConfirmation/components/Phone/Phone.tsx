import React, { ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';
import styles from './Phone.module.scss';
import { Button } from '@/components/Ui';
import { $host } from '@/http';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const Phone = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEnterCode, setIIsEnterCode] = React.useState<boolean>(false);
  const [usId, setUsId] = React.useState<string>('');
  console.log(usId);

  const onSubmitPhone = async () => {
    try {
      setIsLoading(true);
      const res = await $host.post('code/get', { phone: values.formattedValue });
      setUsId(res.data._id);
      setIIsEnterCode(true);
    } catch (e) {
      console.warn('Ошибка при отправке СМС', e);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (code: string) => {
    try {
      setIsLoading(true);
      await $host.post('code/enter-code', { code, userId: usId });
    } catch (e) {
      alert('Ошибка при активации');
      setCodes(['', '', '', '']);
    }
    setIsLoading(false);
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const { value } = event.target;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    } else {
      onSubmit([...codes, value].join(''));
    }
  };

  return (
    <div className={styles.wrapper}>
      <NumberFormat
        name='phone'
        format='+7 (###) ###-##-##'
        mask='_'
        placeholder='+7 (123) 456-78-90'
        value={values.formattedValue}
        onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
      />
      <label htmlFor='phone'>Телефон</label>
      {!isEnterCode ? (
        <Button
          appearance='primary'
          className={styles.btn}
          disabled={!values}
          onClick={onSubmitPhone}
        >
          Получить код
        </Button>
      ) : (
        <div className={styles.codeInput}>
          {codes.map((code, index) => (
            <input
              key={index}
              type='tel'
              placeholder='X'
              maxLength={1}
              id={String(index)}
              onChange={handleChangeInput}
              value={code}
            />
          ))}
        </div>
      )}
    </div>
  );
};
