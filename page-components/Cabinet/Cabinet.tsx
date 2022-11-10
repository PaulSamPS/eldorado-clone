import React from 'react';
import cn from 'classnames';
import styles from './Cabinet.module.scss';

const nav = [
  { id: 0, name: 'Профиль' },
  { id: 1, name: 'Избранное' },
];

export const Cabinet = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        {nav.map((n, index) => (
          <div
            key={n.id}
            className={cn(styles.item, { [styles.active]: activeIndex === index })}
            onClick={() => setActiveIndex(index)}
          >
            {n.name}
          </div>
        ))}
      </div>
    </div>
  );
};
