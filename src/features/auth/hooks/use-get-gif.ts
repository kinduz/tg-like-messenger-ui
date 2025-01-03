import { useMemo } from 'react';
import { Theme } from '@/shared';
import RocketDark from '../assets/rocket-black.gif';
import OtpStep from '../assets/otp-step.gif';

const gifs: any = {
  [Theme.DARK]: {
    0: RocketDark,
    1: OtpStep,
  },
  [Theme.LIGHT]: {
    0: RocketDark,
    1: OtpStep,
  },
};

export const useGetGif = (theme: Theme, currentStep: number) => {
  const gifForForm = useMemo(() => {
    return gifs[theme][currentStep];
  }, [currentStep, theme]);
  return gifForForm;
};
