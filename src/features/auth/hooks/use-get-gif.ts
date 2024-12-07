import RocketDark from '../assets/rocket_black.gif';

export const useGetGif = (theme: string) => {
  return theme === 'dark' && RocketDark;
};
