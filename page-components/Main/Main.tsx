import React from 'react';
import styles from './Main.module.scss';
import { DayProduct, Sidebar, TopProduct } from '@/components';
import { MainProps } from './Main.props';
import { H } from '@/components/Ui';
import { useScreenWidth } from '@/hooks';
import { generateWidth } from '@/helpers';
import { Bot, Top } from './components/Slider';

export const Main = ({ ...props }: MainProps) => {
  const screenWidth = useScreenWidth();

  return (
    <div className={styles.wrapper}>
      {screenWidth > 1000 && <Sidebar menu={props.menu} className={styles.sidebar} />}
      <div className={styles.sliderTop}>
        <H tag='h2'>Новые акции</H>
        <Top
          arr={props.slider}
          width={generateWidth({ width: screenWidth, min: 240, max: 660 })}
          maxHeight={300}
        />
      </div>
      <DayProduct dayProducts={props.dayProducts} className={styles.dayProduct} />
      <TopProduct product={props.products} className={styles.topProduct} />
      {screenWidth > 1000 && (
        <Bot
          arr={props.slider}
          width={generateWidth({ width: screenWidth, min: 240, max: 1200 })}
          maxHeight={110}
        />
      )}
    </div>
  );
};
