import React, { MouseEvent } from 'react';
import styles from './Title.module.scss';
import { Button, Input } from '../../../../../../Ui';
import { TitleProps } from './Title.props';
import { useAppDispatch } from '../../../../../../../hooks/useAppDispatch';
import {
  removeFeaturesItem,
  setFeaturesItem,
  setFeaturesTitleText,
} from '../../../../../../../redux/reducers/featuresReducer';

export const Title = ({ item }: TitleProps) => {
  const dispatch = useAppDispatch();

  const addInfo = (e: MouseEvent, number: number) => {
    e.preventDefault();
    const obj = {
      number: number,
      item: {
        name: '',
        description: '',
        number: Date.now(),
      },
    };
    dispatch(setFeaturesItem(obj));
  };

  const removeInfo = (number: number) => {
    dispatch(removeFeaturesItem(number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    const obj = {
      key: key,
      value: value,
      number: number,
    };
    dispatch(setFeaturesTitleText(obj));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputBlock}>
        <label htmlFor='title'>
          Заголовок:
          <Input
            name='title'
            value={item.title}
            onChange={(e) => changeInfo('title', e.target.value, item.number)}
            placeholder='Введите название заголовка'
          />
        </label>
        <Button onClick={() => removeInfo(item.number)} appearance='primary'>
          Удалить
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button name='infoBtn' onClick={(e) => addInfo(e, item.number)} appearance='primary'>
          Добавить описание
        </Button>
      </div>
    </div>
  );
};
