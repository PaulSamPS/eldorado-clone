import React, { useContext } from 'react';
import styles from './Total.module.scss';
import { Button, H } from '@/components/Ui';
import { endOf, priceRu } from '@/helpers';
import { StepContext } from '@/context';
import { useAppSelector } from '@/hooks';

export const Total = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const { step, nextStep } = useContext(StepContext);
  const count = basket && basket.products.reduce((i, sum) => i + sum.qty, 0);

  return (
    <div className={styles.wrapper}>
      <H tag='h2'>Ваш заказ</H>
      <div className={styles.count}>
        {count}
        <span>{endOf(count, 'товар', 'товара', 'товаров')} в корзине</span>
      </div>
      <div className={styles.info}>
        <div className={styles.item}>
          <span className={styles.text}>Сумма</span>
          <span className={styles.value}>{priceRu(basket && basket.totalPrice)}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.text}>Самовывоз</span>
          <span className={styles.value}>Бесплатно</span>
        </div>
      </div>
      <div className={styles.total}>
        <span className={styles.text}>Всего к оплате</span>
        <span className={styles.totalPrice}>{priceRu(basket && basket.totalPrice)}</span>
      </div>
      {step === 2 && (
        <Button appearance='primary' onClick={nextStep}>
          Продолжить
        </Button>
      )}
      {step === 3 && <Button appearance='primary'>Подтвердить заказ</Button>}
      {step === 3 && (
        <div className={styles.offer}>
          Нажимая кнопку Подтвердить заказ, я соглашаюсь с условиями Оферты, включающей условия
          обработки персональных данных.
        </div>
      )}
    </div>
  );
};
