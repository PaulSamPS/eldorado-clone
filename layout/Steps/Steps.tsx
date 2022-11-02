import React from 'react';
import { Nav } from './components';
import { StepsProps } from './Steps.props';

export const Steps = ({ children }: StepsProps) => (
  <>
    <Nav />
    <div>{children}</div>
  </>
);
