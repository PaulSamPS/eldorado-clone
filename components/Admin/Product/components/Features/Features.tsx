import React, { MouseEvent } from 'react';
import { Button } from '../../../../Ui';
import {Item, Title} from './components';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { setFeaturesTitleItem } from '../../../../../redux/reducers/featuresReducer';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

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
        <div>
          <Button
            name='infoBtn'
            onClick={(e) => addTitle(e)}
            appearance='primary'
            style={{ width: '227px' }}
          >
            Добавить информацию
          </Button>
        </div>
      </label>
    </div>
  );
};
