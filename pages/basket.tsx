import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';

const Basket = () => {
  const { basket } = useAppSelector((state) => state.basketReducer);
  return (
    <div>
      Итого:{' '}
      {basket.products.map((p) => (
        <li key={p._id}>{p.name}</li>
      ))}
    </div>
  );
};

export default Basket;
