import React from 'react';
import cn from 'classnames';
import styles from './Search.module.scss';
import { Button } from '@/components/Ui';
import { SearchIcon } from '@/icons';
import { SearchProps } from './Search.props';

export const Search = ({ className }: SearchProps) => (
  <div className={cn(styles.wrapper, className)}>
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
