import React from 'react';
import styles from './Search.module.scss';
import { Button } from '@/components/Ui';
import { SearchIcon } from '@/icons';

export const Search = () => (
  <div className={styles.wrapper}>
    <div className={styles.search}>
      <div className={styles.input}>
        <input placeholder='Поиск' type='text' />
      </div>
      <Button appearance='primary' className={styles.searchBtn}>
        Поиск
        <SearchIcon className={styles.searchLogo} />
      </Button>
    </div>
  </div>
);
