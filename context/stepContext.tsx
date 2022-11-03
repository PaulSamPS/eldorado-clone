import React from 'react';

export interface IStepContext {
  step: number;
  nextStep: () => void;
  setStep: (step: number) => void;
}

export const StepContext = React.createContext<IStepContext>({} as IStepContext);
