import React from 'react';
import cn from 'classnames';
import styles from './Top.module.scss';
import { Button, H } from '@/components/Ui';
import { ListIcon, OnMapIcon } from '@/icons';

export const Top = () => {
  const [isMaps, setIsMaps] = React.useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
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
  );
};
