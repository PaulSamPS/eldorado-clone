import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import Admin from '../page-components/Admin/Admin';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Admin />
    </div>
  );
};

export default Home;
