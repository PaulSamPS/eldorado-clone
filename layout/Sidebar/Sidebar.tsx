import React from 'react';
import Link from 'next/link';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import { IMenu } from '../../interfaces/menu.interface';

export const Sidebar = ({ menu }: SidebarProps) => (
  <div className={styles.sidebar}>
    {menu.map((m: IMenu) => (
      <span key={m._id} className={styles.type}>
        <Link href={m.link}>
          <div className={styles.link}>
            <img
              className={styles.svg}
              src={`http://localhost:5000/menu/${m.name}/${m.img}`}
              alt=''
              title={m.name}
            />
            {m.name}
          </div>
        </Link>
      </span>
    ))}
  </div>
);
