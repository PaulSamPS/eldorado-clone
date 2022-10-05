import Slider from '../../components/Slider/Slider';
import TopProduct from '../../components/TopProduct/TopProduct';
import DayProduct from '../../components/DayProduct/DayProduct';
import styles from './Shop.module.scss';
import ProductList from '../../components/ProductList/ProductList';
import Sidebar from '../../layout/Sidebar/Sidebar';
import React from 'react';
import { ShopProps } from './Shop.props';

const Shop = ({ products, menu }: ShopProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar} menu={menu} />
      <div className={styles.top}>
        <Slider className={styles.slider} />
        <DayProduct product={products} className={styles.dayProducts} />
        <div className={styles.main}>
          <ProductList products={products} className={styles.productsList} />
          <TopProduct className={styles.topProduct} product={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
