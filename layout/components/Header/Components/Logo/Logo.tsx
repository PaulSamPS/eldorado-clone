import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';
import { LogoIcon } from '@/icons';

export const Logo = () => (
  <Link href='/pages'>
    <a>
      <LogoIcon className={styles.wrapper} title='Эльдорадо' />
    </a>
  </Link>
);
