import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { Features } from '../components/Admin/Features';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Features />
    </div>
  );
};

export default Home;
