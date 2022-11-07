import React, { ChangeEvent } from 'react';
import styles from './CodeInput.module.scss';
import { $host } from '@/http';
import { CodeInputProps } from './CodeInput.props';
import { Button } from '@/components/Ui';

export const CodeInput = ({ userId, setIsAuth }: CodeInputProps) => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit = async (code: string) => {
    try {
      setIsLoading(true);
      await $host.post('code/enter-code', { code, userId });
      setIsAuth(true);
    } catch (e) {
      alert('Ошибка при активации');
      setCodes(['', '', '', '']);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
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
      await onSubmit([...codes, value].join(''));
    }
  };
  return (
    <div className={styles.codeInput}>
      <div className={styles.code}>Код</div>
      <div className={styles.enterCode}>
        {codes.map((code, index) => (
          <input
            key={index}
            type='tel'
            placeholder=''
            maxLength={1}
            id={String(index)}
            onChange={handleChangeInput}
            value={code}
          />
        ))}
      </div>
      <Button appearance='ghost' onClick={() => setIsAuth(true)}>
        Не приходит код
      </Button>
      <div className={styles.options}>
        <p>Получить новый код</p>
        <p>Ввести другой телефон</p>
      </div>
    </div>
  );
};
