import React from 'react';
import { Input } from '../../../Ui/Input/Input';
import { Button } from '../../../Ui/Button/Button';
import styles from './Price.module.scss';
import { PriceProps } from './Price.props';

export const Price = ({
  price,
  setPrice,
  oldPrice,
  setOldPrice,
  addOldPrice,
  setAddOldPrice,
}: PriceProps) => {
  const handleAddOldPrice = () => {
    setAddOldPrice(true);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor='Цена'>
        Цена:
        <Input
          name='Цена'
          placeholder='Цена'
          type='text'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      <label htmlFor='Старая цена'>
        Старая цена:
        {!addOldPrice ? (
          <Button className={styles.btnOldPrice} appearance='primary' onClick={handleAddOldPrice}>
            Добавить
          </Button>
        ) : (
          <Input
            name='Старая цена'
            placeholder='Старая цена'
            type='text'
            value={oldPrice}
            onChange={(e) => setOldPrice(Number(e.target.value))}
          />
        )}
      </label>
    </div>
  );
};
