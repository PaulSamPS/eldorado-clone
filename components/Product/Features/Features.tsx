import React, { FC } from 'react';
import styles from './Features.module.scss';
import { FeaturesProps } from './Features.props';
import { Table } from './Table/Table';

export const Features: FC<FeaturesProps> = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>Характеристики {product.name}</div>
      {product.features.map((f) => (
        <Table key={f._id} features={f} />
      ))}
    </div>
  );
};
