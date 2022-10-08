import { setClearDayProducts, setSuccessDayProducts } from '../redux/reducers/dayProducts.reducer';
import React, { useState } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { $host } from '../http';
import { AxiosResponse } from 'axios';
import { IProduct } from '../interfaces/product.interface';

export const useTimer = () => {
  const hour = 24 - new Date().getHours() - 1;
  const min = 60 - new Date().getMinutes() - 1;
  const sec = 60 - new Date().getSeconds();
  const [hours, setHours] = useState(hour);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const dispatch = useAppDispatch();

  const updateProducts = async () => {
    dispatch(setClearDayProducts());

    const dayProducts = await $host.post<IProduct[]>('day-products');
    dispatch(setSuccessDayProducts(dayProducts.data));
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

  return { hours, minutes, seconds, updateProducts };
};
