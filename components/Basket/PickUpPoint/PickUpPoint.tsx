import React, { useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './PickUpPoint.module.scss';
import { Button, H } from '@/components/Ui';
import { ListIcon, OnMapIcon } from '@/icons';
import { AppContext } from '@/context';

export const PickUpPoint = () => {
  const [isMaps, setIsMaps] = React.useState<boolean>(false);
  const { basket } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.top}>
          <H tag='h2'>Самовывоз</H>
          <div className={styles.buttons}>
            <Button
              appearance='ghost'
              className={cn({ [styles.activeBtn]: !isMaps })}
              onClick={() => setIsMaps(false)}
            >
              <ListIcon />
              списком
            </Button>
            <Button
              appearance='ghost'
              className={cn({ [styles.activeBtn]: isMaps })}
              onClick={() => setIsMaps(true)}
            >
              <OnMapIcon />
              на карте
            </Button>
          </div>
          <div className={styles.city}>
            <span className={styles.label}>Ваш город:</span>
            <div className={styles.select}>
              <span className={styles.value}>Москва</span>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <H tag='h2'>Магазины «Эльдорадо»</H>
          <div className={styles.shop}>
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
              {basket.products.map((p) => (
                <div className={styles.product}>
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
              <Button appearance='primary'>Заберу отсюда</Button>
            </div>
          </div>
        </div>
      </div>
      <div>right</div>
    </div>
  );
};
