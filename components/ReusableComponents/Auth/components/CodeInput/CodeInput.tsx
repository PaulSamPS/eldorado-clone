import React, { ChangeEvent, useContext } from 'react';
import styles from './CodeInput.module.scss';
import { CodeInputProps } from './CodeInput.props';
import { Button } from '@/components/Ui';
import { useAppDispatch } from '@/hooks';
import { enterCode } from '@/redux/actions';
import { StepContext } from '@/context';

export const CodeInput = ({ userId, setIsAuth }: CodeInputProps) => {
  const [codes, setCodes] = React.useState<string[]>(['', '', '', '']);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { nextStep } = useContext(StepContext);

  const onSubmit = async (code: string) => {
    try {
      setIsLoading(true);
      dispatch(enterCode(code, userId));
      setIsAuth(true);
      nextStep();
    } catch (e) {
      console.log(e);
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
