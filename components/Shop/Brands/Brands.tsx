import React from 'react';
import styles from './Brands.module.scss';
import { BrandsProps } from './Brands.props';
import cn from 'classnames';
import { H } from '../../Ui';

export const Brands = ({ brands, className, ...props }: BrandsProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <H tag='h2'>Бренды</H>
      <div className={styles.brands}>
        {brands.map((b) => (
          <div className={styles.card} key={b._id}>
            <img src={`http://localhost:5000/brand/${b.name}/${b.img}`} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};
