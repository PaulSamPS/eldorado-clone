import React, { FC } from 'react';
import styles from './Features.module.scss';
import { FeaturesProps } from './Features.props';
import cn from 'classnames';

export const Features: FC<FeaturesProps> = ({ features }) => {
  const [hide, setHide] = React.useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div onClick={() => setHide(!hide)}>{features.title}</div>
        {features.item.map((i, index) => (
          <ul key={i._id} className={cn(styles.list, { [styles.hide]: hide })}>
            <li>{i.name}</li>
            <li>{i.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
