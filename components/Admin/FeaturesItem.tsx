import React from 'react';
import styles from '../../page-components/Admin/Admin.module.scss';
import { Input } from '../Ui/Input/Input';
import { FeaturesItemProps } from './FeaturesItem.props';
import { Button } from '../Ui/Button/Button';
import { removeFeaturesItemDesc } from '../../redux/reducers/featuresReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const FeaturesItem = ({ item, info, setInfo, titleNumber }: FeaturesItemProps) => {
  const dispatch = useAppDispatch();

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const removeInfoItem = (number: number) => {
    dispatch(removeFeaturesItemDesc({ number: number, titleNumber: titleNumber }));
  };

  return (
    <div className={styles.features} key={item.number}>
      <label htmlFor='name'>
        Название:
        <Input
          name='name'
          value={item.name}
          onChange={(e) => changeInfo('name', e.target.value, item.number)}
          placeholder='Введите описание свойства'
        />
      </label>
      <label htmlFor='description'>
        Описание:
        <Input
          name='description'
          value={item.description}
          onChange={(e) => changeInfo('description', e.target.value, item.number)}
          placeholder='Введите описание свойства'
        />
      </label>
      <Button onClick={() => removeInfoItem(item.number)} appearance='primary'>
        Удалить
      </Button>
    </div>
  );
};
