import React from 'react';
import styles from './Item.module.scss';
import { Input } from '../../../../Ui/Input/Input';
import { ItemProps } from './Item.props';
import { Button } from '../../../../Ui/Button/Button';
import {
  removeFeaturesItemDesc,
  setFeaturesItemText,
} from '../../../../../redux/reducers/featuresReducer';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';

export const Item = ({ item, titleNumber }: ItemProps) => {
  const dispatch = useAppDispatch();

  const changeInfo = (key: string, value: string, number: number, titleNumber: number) => {
    const obj = {
      key: key,
      value: value,
      number: number,
      titleNumber: titleNumber,
    };
    dispatch(setFeaturesItemText(obj));
  };

  const removeInfoItem = (number: number) => {
    dispatch(removeFeaturesItemDesc({ number: number, titleNumber: titleNumber }));
  };

  return (
    <div className={styles.wrapper} key={item.number}>
      <div className={styles.inputs}>
        <label htmlFor='name'>
          Название:
          <Input
            name='name'
            value={item.name}
            onChange={(e) => changeInfo('name', e.target.value, item.number, titleNumber)}
            placeholder='Введите описание свойства'
          />
        </label>
        <label htmlFor='description'>
          Описание:
          <Input
            name='description'
            value={item.description}
            onChange={(e) => changeInfo('description', e.target.value, item.number, titleNumber)}
            placeholder='Введите описание свойства'
          />
        </label>
      </div>
      <Button onClick={() => removeInfoItem(item.number)} appearance='primary'>
        Удалить
      </Button>
    </div>
  );
};
