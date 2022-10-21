import React from 'react';
import styles from './MainPageComponents.module.scss';
import { DayProduct, Sidebar, TopProduct } from '@/components';
import { Slider } from '@/components/ReusableComponents';
import { MainPageComponentsProps } from './MainPageComponents.props';
import { H } from '@/components/Ui';
import { useScreenWidth } from '@/hooks';
import { generateWidth } from '@/helpers';

export const MainPageComponents = ({ ...props }: MainPageComponentsProps) => {
  const screenWidth = useScreenWidth();
  console.log(screenWidth);
  return (
    <div className={styles.wrapper}>
      <Sidebar menu={props.menu} className={styles.sidebar} />
      <div className={styles.sliderTop}>
        <H tag='h2'>Новые акции</H>
        {props.slider.map((s) => (
          <Slider
            key={s._id}
            arr={s.l}
            arrowTop={37.5}
            arrowVertical={30}
            height={300}
            width={660}
            snap={screenWidth <= 768}
          />
        ))}
      </div>
      <DayProduct dayProducts={props.dayProducts} className={styles.dayProduct} />
      <TopProduct product={props.products} className={styles.topProduct} />
      {props.slider.map((s) => (
        <Slider
          className={styles.sliderBot}
          key={s._id}
          arr={s.s}
          height={110}
          width={generateWidth({ width: screenWidth, min: 320, max: 1200 })}
          greenDots
          arrowTop={19}
          arrowVertical={65}
          duration={2000}
          snap={screenWidth <= 768}
        />
      ))}
    </div>
  );
};
