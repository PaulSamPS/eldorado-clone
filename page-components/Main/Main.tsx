import React from 'react';
import styles from './Main.module.scss';
import { DayProduct, Sidebar, TopProduct } from '@/components';
import { Slider } from '@/components/ReusableComponents';
import { H } from '@/components/Ui';
import { useScreenWidth } from '@/hooks';
import { generateWidth, WidthContainer } from '@/helpers';
import { MainPageComponentsProps } from './Main.props';

export const Main = ({ ...props }: MainPageComponentsProps) => {
  const screenWidth = useScreenWidth();

  return (
    <div className={styles.wrapper}>
      <Sidebar menu={props.menu} className={styles.sidebar} />
      <div className={styles.sliderTop}>
        <H tag='h2'>Новые акции</H>
        {props.slider.map((s) => (
          <Slider
            key={s._id}
            arr={s.l}
            height={300}
            width={generateWidth({ width: screenWidth, min: 240, max: 660 })}
          />
        ))}
      </div>
      <DayProduct className={styles.dayProduct} />
      <TopProduct product={props.products} className={styles.topProduct} />
      {screenWidth > WidthContainer && (
        <div className={styles.sliderBot}>
          {props.slider.map((s) => (
            <Slider
              key={s._id}
              arr={s.s}
              height={screenWidth <= 1300 ? 88 : 110}
              width={generateWidth({ width: screenWidth, min: 240, max: 1200 })}
              greenDots
              duration={2000}
              arrowVertical={60}
            />
          ))}
        </div>
      )}
    </div>
  );
};
