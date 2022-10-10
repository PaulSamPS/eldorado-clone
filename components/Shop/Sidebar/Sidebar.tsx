import { SidebarProps } from './Sidebar.props';
import { IMenu } from '../../../interfaces/menu.interface';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

export const Sidebar = ({ className, menu }: SidebarProps) => {
  return (
    <div className={className}>
      {menu.map((menu: IMenu) => (
        <span key={menu._id} className={styles.type}>
          <Link href={menu.link}>
            <div className={styles.link}>
              <img
                className={styles.svg}
                src={`http://localhost:5000/menu/${menu.name}/${menu.img}`}
                alt=''
              />
              {menu.name}
            </div>
          </Link>
        </span>
      ))}
    </div>
  );
};
