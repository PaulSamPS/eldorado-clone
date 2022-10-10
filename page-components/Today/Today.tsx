import React, { useState } from 'react';
import styles from './Today.module.scss';
import { TodayProps } from './Today.props';
import { priceRu } from '../../helpers/priceRu';
import Link from 'next/link';
import { H } from '../../components/Ui/H/H';
import Timer from '../../components/Timer/Timer';
import cn from 'classnames';
import Arrow from '../../components/Ui/Arrow/Arrow';
import { Button } from '../../components/Ui/Button/Button';
import { CartButtonIcon, LocationIcon } from '../../icons';
import Review from '../../components/Review/Review';
import Rating from '../../components/Rating/Rating';
import { useRouter } from 'next/router';

export const Today = ({ products, currentProduct, productsYesterday }: TodayProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [offsetPreview, setOffsetPreview] = useState<number>(0);
  const { query } = useRouter();
  const IMG_WIDTH = 380;
  const IMG_WIDTH_PREVIEW = 62.5;

  const right = () => {
    setOffset((currentOffset: number) => {
      return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (currentProduct!.img.length - 1)));
    });
    setSlideIndex(slideIndex + 1);
    setOffsetPreview((currentOffset: number) => {
      return Math.max(
        currentOffset - IMG_WIDTH_PREVIEW,
        -(IMG_WIDTH_PREVIEW * (currentProduct!.img.length - 4))
      );
    });
  };

  const left = () => {
    setOffset((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setOffsetPreview((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH_PREVIEW, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const handleClick = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
    setOffsetPreview(-IMG_WIDTH_PREVIEW);
  };

  React.useEffect(() => {
    setSlideIndex(0);
    setOffsetPreview(0);
    setOffset(0);
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.dayProducts}>
          <H tag='h2'>Другие товары дня</H>
          {products
            .filter((p) => p.oldPrice > 0)
            .map((i) => (
              <Link href={`/today/${i._id}`} key={i._id}>
                <a>
                  <div
                    className={cn(styles.card, { [styles.active]: i._id === currentProduct?._id })}
                  >
                    <div className={styles.percent}>
                      {'-' + Math.floor(((i.oldPrice! - i.price) / i.oldPrice!) * 100) + '%'}
                    </div>
                    <div className={styles.left}>
                      <img
                        src={`http://localhost:5000/product/${i.name}/${i.img[0].fileName}`}
                        alt={i.name}
                      />
                    </div>
                    <div className={styles.right}>
                      <div className={styles.sale}>
                        <span className={styles.oldPrice}>{priceRu(i.oldPrice)}</span>
                        <span className={styles.discount}>-{priceRu(i.oldPrice! - i.price)}</span>
                      </div>
                      <span className={styles.price}>{priceRu(i.price)}</span>
                      <p className={styles.name}>{i.name}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </div>
        <div className={styles.productsYesterday}>
          <H tag='h2'>Товары прошлых дней</H>
          {productsYesterday.map((p) => (
            <div className={styles.cardYesterday} key={p._id}>
              <div className={styles.yesterdayLeft}>
                <img src={`http://localhost:5000/product/${p.name}/${p.img[0].fileName}`} alt='' />
              </div>
              <div className={styles.yesterdayRight}>
                <a>{p.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <H tag='h2'>Только сегодня!</H>
        <div className={styles.top}>
          <H tag='h2'>Товар дня</H>
          <div className={styles.endAction}>
            <span>До конца действия супер-цены осталось:</span>
            <Timer className={styles.timer} />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.left}>
              <H tag='h1'>{currentProduct?.name}</H>
              <div className={styles.rating}>
                <Rating rating={5} isFully className={styles.star} />
                <Review review={5} className={styles.comments} />
              </div>
              <div className={styles.productBlock}>
                <div className={styles.percent}>
                  <span className={styles.totalPercent}>
                    {Math.floor(
                      ((currentProduct!.oldPrice! - currentProduct!.price) /
                        currentProduct!.oldPrice!) *
                        100
                    )}
                    <div>%</div>
                  </span>
                  <span>скидка</span>
                </div>
                <div className={styles.carousel}>
                  <div className={styles.sliderWrapper}>
                    {currentProduct?.img.map((image: any) => (
                      <div
                        key={image.fileName}
                        className={styles.slider}
                        style={{ transform: `translateX(${offset}px)` }}
                      >
                        <img
                          src={`http://localhost:5000/product/${currentProduct.name}/${image.fileName}`}
                          alt=''
                        />
                      </div>
                    ))}
                  </div>
                  {slideIndex > 0 && (
                    <Arrow
                      appearance='left'
                      background='none'
                      onClick={left}
                      className={styles.leftTop}
                    />
                  )}
                  {slideIndex !== currentProduct!.img.length - 1 && (
                    <Arrow
                      appearance='right'
                      background='none'
                      onClick={right}
                      className={styles.rightTop}
                    />
                  )}
                  <div className={styles.previewWrapper}>
                    {currentProduct?.img.map((image: any, index: number) => (
                      <div
                        key={image.fileName}
                        onClick={() => handleClick(index)}
                        style={{ transform: `translateX(${offsetPreview}px)` }}
                        className={cn(styles.previewSlider, {
                          [styles.active]: slideIndex === index,
                        })}
                      >
                        <img
                          src={`http://localhost:5000/product/${currentProduct.name}/${image.fileName}`}
                          alt=''
                        />
                      </div>
                    ))}
                  </div>
                  {slideIndex > 0 && (
                    <Arrow
                      appearance='left'
                      background='white'
                      onClick={left}
                      className={styles.leftBot}
                    />
                  )}
                  {slideIndex !== currentProduct!.img.length - 1 && (
                    <Arrow
                      appearance='right'
                      background='white'
                      onClick={right}
                      className={styles.rightBot}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.buyBlock}>
                <div className={styles.topBuy}>
                  <div className={styles.sale}>
                    <span className={styles.oldPrice}>{priceRu(currentProduct!.oldPrice)}</span>
                    <span className={styles.discount}>
                      -{priceRu(currentProduct!.oldPrice! - currentProduct!.price)}
                    </span>
                  </div>
                  <span className={styles.price}>{priceRu(currentProduct!.price)}</span>
                  <Button appearance='primary'>
                    <CartButtonIcon /> Купить сейчас
                  </Button>
                </div>
                <hr />
                <div className={styles.deliveryBlock}>
                  <div className={styles.location}>
                    <LocationIcon />
                    <a>Самовывоз</a> <span>завтра, бесплатно</span>
                  </div>
                </div>
              </div>
              <div className={styles.features}>
                {currentProduct!.features.map((f) => (
                  <div key={f._id} className={styles.block}>
                    <b>{f.title}:</b>
                    {f.item.map((i) => (
                      <div key={i._id} className={styles.items}>
                        <p className={styles.name}>{i.name}: </p>
                        <p>{i.description}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rules}>
            <H tag='h4'>Правила проведения акции "Товар дня"</H>
            <ol>
              <li>
                Товар дня не пересекается ни с какими другими акциями, кроме выдачи купонов,
                эльдокарт или эльдочеков.
              </li>
              <li>
                При участии товара дня в акциях по рассрочке, возможно его приобретение в льготный
                кредит.
              </li>
              <li>
                Дополнительные условия акции "Товар дня" уточняйте по телефону 8 800 250 25 25.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
