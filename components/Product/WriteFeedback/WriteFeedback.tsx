import React, { FC } from 'react';
import styles from './WriteFeedback.module.scss';
import { Button } from '../../Ui';
import { WriteFeedbackProps } from './WriteFeedback.props';
import { WriteIcon } from '@/icons';

export const WriteFeedback: FC<WriteFeedbackProps> = ({
  setWriteFeedback,
  sort,
  setSort,
}): JSX.Element => (
  <div className={styles.wrapper}>
    <label htmlFor='Sort'>
      Сортировать по:
      <select name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
        <option>Пользе</option>
        <option>Дате добавления</option>
      </select>
    </label>
    <Button
      className={styles.btnReview}
      appearance='primary'
      onClick={() => setWriteFeedback(true)}
    >
      <WriteIcon />
      Написать отзыв
    </Button>
  </div>
);
