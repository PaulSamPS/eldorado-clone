import React, { FunctionComponent } from 'react';
import { Steps } from '@/layout';

export const withStepsLayout = (Component: FunctionComponent) =>
  function withLayoutComponent() {
    return (
      <Steps>
        <Component />
      </Steps>
    );
  };
