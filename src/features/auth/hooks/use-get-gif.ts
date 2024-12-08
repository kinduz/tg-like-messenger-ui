import { Theme } from '@/shared';
import RocketDark from '../assets/rocket_black.gif';
import RocketLight from '../assets/rocket_light.gif';

export const useGetGif = (theme: Theme) => {
  return theme === Theme.DARK ? RocketDark : RocketLight;
};
