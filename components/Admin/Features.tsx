import React, { MouseEvent, useState } from 'react';
import styles from '../../page-components/Admin/Admin.module.scss';
import { Button } from '../Ui/Button/Button';
import { FeaturesTitle } from './FeaturesTitle';
import { FeaturesItem } from './FeaturesItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setFeaturesTitle } from '../../redux/reducers/featuresReducer';
import { useAppSelector } from '../../hooks/useAppSelector';

export const Features = () => {
  const [info, setInfo] = useState<any[]>([]);
  const { features } = useAppSelector((state) => state.featuresReducer);
  const dispatch = useAppDispatch();
  console.log(features);

  const addTitle = (e: MouseEvent) => {
    dispatch(setFeaturesTitle({ title: '', item: [], number: Date.now() }));
    e.preventDefault();
  };

  return (
    <div>
      {features.map((i, index) => (
        <>
          <FeaturesTitle key={i.number + index} item={i} info={info} setInfo={setInfo} />
          {i.item.map((n: any, index: number) => (
            <FeaturesItem key={n.number + index} item={n} info={info} setInfo={setInfo} />
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
