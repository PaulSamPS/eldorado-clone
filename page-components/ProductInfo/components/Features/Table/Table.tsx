import React, { FC } from 'react';
import styles from './Table.module.scss';
import cn from 'classnames';
import { TableProps } from './Table.props';

export const Table: FC<TableProps> = ({ features }) => {
  const [hide, setHide] = React.useState<boolean>(false);

  const hideItems = () => {
    setHide(!hide);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div onClick={hideItems}>{features.title}</div>
        {features.item.map((i) => (
          <ul key={i._id} className={cn(styles.list, { [styles.hide]: hide })}>
            <li>{i.name}</li>
            <li>{i.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
