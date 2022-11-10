import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './Shop.module.scss';
import { Button } from '@/components/Ui';
import { AppContext, StepContext } from '@/context';
import { useAppSelector } from '../../../../../hooks/redux';

export const Shop = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const { nextStep } = useContext(StepContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.shopName}>
        <input type='radio' name='method' checked readOnly />
        <Link href='/'>
          <a>
            <span className={styles.eldorado} />
            ТРЦ «Июнь», ул. Мира, стр. 51
          </a>
        </Link>
      </div>
      <div className={styles.productList}>
        {basket &&
          basket.products.map((p) => (
            <div key={p.product._id} className={styles.product}>
              <div className={styles.name}>{p.product.name}</div>
              <div className={styles.times}>Через 15 минут</div>
            </div>
          ))}
      </div>
      <div className={styles.nextStep}>
        <div className={styles.map} />
        <div className={styles.address}>
          <p>Ленинградское ш., д. 112/1</p>
          <p>ТЦ «Азбука Вкуса»</p>
          <p>00:00-23:59, ежедневно</p>
        </div>
        <Button appearance='primary' onClick={nextStep}>
          Заберу отсюда
        </Button>
      </div>
    </div>
  );
};
