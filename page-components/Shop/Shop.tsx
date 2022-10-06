import Slider from '../../components/Slider/Slider';
import TopProduct from '../../components/TopProduct/TopProduct';
import DayProduct from '../../components/DayProduct/DayProduct';
import styles from './Shop.module.scss';
import ProductList from '../../components/ProductList/ProductList';
import Sidebar from '../../layout/Sidebar/Sidebar';
import React from 'react';
import { ShopProps } from './Shop.props';

const sliderTop = [
  {
    id: 0,
    img: 'https://static.eldorado.ru/upload/newbx/2e8/2e847c62a73a609ba350cb5c51647644.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 1,
    img: 'https://static.eldorado.ru/upload/newbx/6ee/6eef3e888c29ceaec4788fcb4d5a1c3f.png/resize/660x300/',
    type: 'login',
  },
  {
    id: 2,
    img: 'https://static.eldorado.ru/upload/newbx/158/158e1234240317572e316fadec158f81.png/resize/660x300/',
    type: 'registration',
  },
  {
    id: 3,
    img: 'https://static.eldorado.ru/upload/newbx/bf9/bf96288224960fc91726b42fce680dbc.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 4,
    img: 'https://static.eldorado.ru/upload/newbx/3eb/3eb47082211defc8e57fa934ece11d33.png/resize/660x300/',
    type: 'cart',
  },
];

const sliderS = [
  {
    id: 0,
    img: 'https://static.eldorado.ru/upload/newbx/b21/b215f21b5f8eb7eec1f861a0dc38a031.jpg/resize/1200x110/',
    type: 'cart',
  },
  {
    id: 1,
    img: 'https://static.eldorado.ru/upload/newbx/66f/66f06af6859a9b8d8514329193adff3b.png/resize/1200x110/',
    type: 'login',
  },
  {
    id: 2,
    img: 'https://static.eldorado.ru/upload/newbx/4dc/4dc8d63127e75f255c5a7f6351ae5112.png/resize/1200x110/',
    type: 'registration',
  },
  {
    id: 3,
    img: 'https://static.eldorado.ru/upload/newbx/91c/91c83ed9e493ae0ac8f582c212d395d7.png/resize/1200x110/',
    type: 'cart',
  },
  {
    id: 4,
    img: 'https://static.eldorado.ru/upload/newbx/f3d/f3d92f01017f5571a718e477e34fc6de.jpg/resize/1200x110/',
    type: 'cart',
  },
];

const Shop = ({ products, menu }: ShopProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar} menu={menu} />
      <div className={styles.top}>
        <div className={styles.sliderM}>
          <h2>Новые акции</h2>
          <Slider
            className={styles.slider}
            height={300}
            width={660}
            arr={sliderTop}
            arrowTop={37.5}
            arrowVertical={30}
          />
        </div>
        <DayProduct
          product={products.filter((p) => p.oldPrice > 0)}
          className={styles.dayProducts}
        />
        <div className={styles.main}>
          <TopProduct className={styles.topProduct} product={products} />
        </div>
      </div>
      <Slider
        className={styles.sliderS}
        height={110}
        width={1200}
        arr={sliderS}
        greenDots={true}
        arrowTop={19}
        arrowVertical={65}
        duration={3000}
      />
    </div>
  );
};

export default Shop;
