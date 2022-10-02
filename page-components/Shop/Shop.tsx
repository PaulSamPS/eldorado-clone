import Slider from '../../components/Slider/Slider';
import TopProduct from '../../components/TopProduct/TopProduct';
import DayProduct from '../../components/DayProduct/DayProduct';
import { IBrand } from '../../interfaces/brand.interface';
import { ShopProps } from './Shop.props';
import styles from './Shop.module.scss';
import ProductList from '../../components/ProductList/ProductList';
import Sidebar from '../../layout/Sidebar/Sidebar';
import React from 'react';

const Shop = ({ products }: ShopProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar} menu={menu} />
      <div className={styles.topBar}>
        <Slider className={styles.slider} />
        <DayProduct product={products} />
      </div>
      <TopProduct className={styles.topProduct} product={products} />
      <ProductList products={products} />
    </div>
  );
};

export default Shop;
