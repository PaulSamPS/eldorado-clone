import React from 'react';
import styles from './Main.module.scss';
import { DayProduct, Sidebar, TopProduct } from '@/components';
import { Slider } from '@/components/ReusableComponents';
import { H } from '@/components/Ui';
import { useScreenWidth } from '@/hooks';
import { generateWidth } from '@/helpers';
import { MainPageComponentsProps } from './Main.props';

export const MainPageComponents = ({ ...props }: MainPageComponentsProps) => {
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
      <DayProduct dayProducts={props.dayProducts} className={styles.dayProduct} />
      <TopProduct product={props.products} className={styles.topProduct} />
      {screenWidth > 1000 && (
        <div className={styles.sliderBot}>
          {props.slider.map((s) => (
            <Slider
              key={s._id}
              arr={s.s}
              height={110}
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
