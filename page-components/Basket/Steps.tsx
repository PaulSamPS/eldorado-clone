import React from 'react';
import { Nav, Products, PickUpPoint, Payment, OrderConfirmation } from '@/components/Basket';
import { StepContext } from '@/context';

const stepsComponents: any = { 0: Products, 1: PickUpPoint, 2: Payment, 3: OrderConfirmation };

export const Steps = () => {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponents[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <StepContext.Provider value={{ step, nextStep, setStep }}>
      <Nav />
      <Step />
    </StepContext.Provider>
  );
};
