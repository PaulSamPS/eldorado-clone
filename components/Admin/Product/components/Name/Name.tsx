import React from 'react';
import { Input } from '../../../../Ui/Input/Input';
import { NameProps } from './Name.props';

export const Name = ({ name, setName }: NameProps) => {
  return (
    <div>
      <label htmlFor='Название'>
        Название:
        <Input
          name='Название'
          placeholder='Название'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
};
