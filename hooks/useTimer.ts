import { setClearDayProducts, setSuccessDayProducts } from '../redux/reducers/dayProducts.reducer';
import React, { useState } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useTimer = () => {
  const hour = 24 - new Date().getHours() - 1;
  const min = 60 - new Date().getMinutes() - 1;
  const sec = 60 - new Date().getSeconds();
  const [hours, setHours] = useState(hour);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  const updateProducts = () => {
    dispatch(setClearDayProducts());

    const p = products.map((item) => item);
    for (let i = 0; i < 5; i++) {
      const ind = Math.floor(Math.random() * p.length);
      const item = p[ind];
      if (item.oldPrice !== 0) {
        dispatch(setSuccessDayProducts([p.splice(ind, 1)[0]]));
      }
    }
  };

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            updateProducts();
            setHours(23);
            setMinutes(59);
            setSeconds(59);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return { hours, minutes, seconds };
};
