import React from 'react';
import styles from './ModalReview.module.scss';
import { Button, Input } from '../../../components/Ui';
import { Rating } from '../../../components/ReusableComponents';
import Textarea from '../../../components/Ui/Textarea/Textarea';
import { CloseIcon } from '../../../icons';

export const ModalReview = () => {
  const [rating, setRating] = React.useState<number>(5);

  return (
    <form className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.title}>Написать отзыв</div>
        <CloseIcon />
      </div>
      <div className={styles.body}>
        <div className={styles.label}>
          <label htmlFor='name'>
            Ваше имя:
            <Input name='name' />
          </label>
        </div>
        <div className={styles.label}>
          <label htmlFor='city'>
            Город:
            <Input name='city' />
          </label>
        </div>
        <Rating
          rating={rating}
          isEditable={true}
          setRating={setRating}
          className={styles.ratingModal}
        />
        <label htmlFor='textarea' className={styles.textareaLabel}>
          Отзыв:
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
};
