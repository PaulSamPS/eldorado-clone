import React from 'react';
import Link from 'next/link';
import { login } from '@/redux/actions';
import { useAppDispatch } from '@/hooks';

const Page401 = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>401 - Страница доступна только авторизованным пользователям</h1>
      <Link href='/'>
        <a>На главную</a>
      </Link>
    </div>
  );
};

export default Page401;
