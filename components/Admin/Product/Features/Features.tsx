import React, { MouseEvent } from 'react';
import styles from '../../../../page-components/Admin/AddProduct.module.scss';
import { Button } from '../../../Ui/Button/Button';
import { Title } from './Title/Title';
import { Item } from './Item/Item';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { setFeaturesTitleItem } from '../../../../redux/reducers/featuresReducer';
import { useAppSelector } from '../../../../hooks/useAppSelector';

export const Features = () => {
  const { features } = useAppSelector((state) => state.featuresReducer);
  const dispatch = useAppDispatch();

  const addTitle = (e: MouseEvent) => {
    dispatch(setFeaturesTitleItem({ title: '', item: [], number: Date.now() }));
    e.preventDefault();
  };

  return (
    <div>
      {features.map((i, index) => (
        <>
          <Title key={i.number + index} item={i} />
          {i.item.map((n: any, index: number) => (
            <Item key={n.number + index} item={n} titleNumber={i.number} />
          ))}
        </>
      ))}
      <label htmlFor='infoBtn'>
        Информация о продукте:
        <div className={styles.addInfo}>
          <Button name='infoBtn' onClick={(e) => addTitle(e)} appearance='primary'>
            Добавить информацию
          </Button>
        </div>
      </label>
    </div>
  );
};
