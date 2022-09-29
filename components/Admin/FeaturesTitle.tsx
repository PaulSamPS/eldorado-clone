import React from 'react';
import styles from '../../page-components/Admin/Admin.module.scss';
import { Input } from '../Ui/Input/Input';
import { Button } from '../Ui/Button/Button';
import { FeaturesTitleProps } from './FeaturesTitle.props';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setFeaturesItem } from '../../redux/reducers/featuresReducer';

export const FeaturesTitle = ({ item, info, setInfo }: FeaturesTitleProps) => {
  const dispatch = useAppDispatch();
  const addInfo = (filter: number) => {
    const obj = {
      number: item.number,
      item: {
        name: '',
        description: '',
        number: Date.now(),
      },
    };

    // const infoItem = info.find((i) => (i.number = filter));
    // infoItem.item.map((n: any) => n.item.push({ name: '', description: '', number: Date.now() }));
    dispatch(setFeaturesItem(obj));
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  return (
    <div className={styles.description}>
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
      </div>
      <div>
        <Button name='infoBtn' onClick={() => addInfo(item.number)} appearance='primary'>
          Добавить описание
        </Button>
        <Button onClick={() => removeInfo(item.number)} appearance='primary'>
          Удалить
        </Button>
      </div>
    </div>
  );
};
