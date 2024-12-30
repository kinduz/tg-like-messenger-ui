import { Theme } from '@/shared';
import RocketDark from '../assets/rocket-black.gif';
import OtpStep from '../assets/otp-step.gif';

export const useGetGif = (theme: Theme, currentStep: number) => {
  const isFirstStep = currentStep === 0;
  const isThemeDark = theme === Theme.DARK;

  if (isThemeDark) {
    return isFirstStep ? RocketDark : OtpStep;
  }

  return RocketDark;
};
