import { SidebarProps } from './Sidebar.props';
import { IMenu } from '../../interfaces/menu.interface';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

const Sidebar = ({ className, menu }: SidebarProps) => {
  return (
    <div className={className}>
      {menu.map((menu: IMenu) => (
        <span key={menu._id} className={styles.type}>
          <Link href={menu.link}>
            <div className={styles.link}>
              <span
                className={styles.svg}
                style={{
                  backgroundImage: `url(http://localhost:5000/menu/${menu.img}`,
                }}
              />
              {menu.name}
            </div>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Sidebar;
