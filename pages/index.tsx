import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
};

export default Home;
