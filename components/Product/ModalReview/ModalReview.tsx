import React, { FC } from 'react';
import styles from './ModalReview.module.scss';
import { CloseIcon } from '@/icons';
import { ModalReviewProps } from './ModalReview.props';
import { Button, Input, Textarea } from '@/components/Ui';
import { Rating } from '@/components/ReusableComponents';

export const ModalReview: FC<ModalReviewProps> = ({ setWriteFeedback, rating, setRating }) => (
  <form className={styles.wrapper}>
    <div className={styles.top}>
      <div className={styles.title}>Написать отзыв</div>
      <CloseIcon onClick={() => setWriteFeedback(false)} />
    </div>
    <div className={styles.body}>
      <div className={styles.label}>
        <label htmlFor='name'>
          Ваше имя <span>*</span>
          <Input appearance='form' name='name' type='text' />
        </label>
      </div>
      <div className={styles.label}>
        <label htmlFor='email'>
          Email <span>*</span>
          <Input appearance='form' name='email' type='email' />
        </label>
      </div>
      <label htmlFor='rating'>
        Оценка <span>*</span>
        <Rating
          rating={rating}
          isEditable
          setRating={setRating}
          className={styles.ratingModal}
          id='rating'
        />
      </label>
      <label htmlFor='textarea' className={styles.textareaLabel}>
        Отзыв <span>*</span>
        <Textarea className={styles.textarea} name='textarea' />
      </label>
      <label htmlFor='button'>
        &nbsp;
        <Button className={styles.sendReview} appearance='primary' name='button'>
          Отправить
        </Button>
      </label>
    </div>
  </form>
);
