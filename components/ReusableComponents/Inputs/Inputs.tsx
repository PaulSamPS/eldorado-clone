import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Inputs.module.scss';
import { Input } from '@/components/Ui';
import { IUserForm } from '@/interfaces';

export const Inputs = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IUserForm>({ mode: 'all', reValidateMode: 'onChange' });
  return (
    <>
      <div className={styles.input}>
        <Input
          {...register('email', {
            required: { value: true, message: 'Введите e-mail' },
            pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/g, message: 'Неверный формат  email' },
          })}
          appearance='auth'
          error={errors.email}
        />
        <label htmlFor='e-mail'>E-mail</label>
      </div>
      <div className={styles.input}>
        <Input
          {...register('firstName', { required: { value: true, message: 'Введите имя' } })}
          appearance='auth'
          className={styles.firstName}
          error={errors.firstName}
        />
        <label htmlFor='first name'>Имя</label>
      </div>
      <div className={styles.input}>
        <Input
          {...register('lastName', { required: { value: true, message: 'Введите Фамилию' } })}
          appearance='auth'
          className={styles.lastName}
          error={errors.lastName}
        />
        <label htmlFor='last name'>Фамилия</label>
      </div>
    </>
  );
};
