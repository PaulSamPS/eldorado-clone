import React from 'react';
import cn from 'classnames';
import styles from './Features.module.scss';
import { FeaturesProps } from './Features.props';

export const Features = ({ currentProduct, className }: FeaturesProps) => (
  <div className={cn(styles.wrapper, className)}>
    {currentProduct!.features.slice(0, 3).map((f) => (
      <div key={f._id} className={styles.block}>
        <b>{f.title}:</b>
        {f.item.slice(0, 1).map((i) => (
          <div key={i._id} className={styles.items}>
            <p className={styles.name}>{i.name}: </p>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    ))}
  </div>
);
